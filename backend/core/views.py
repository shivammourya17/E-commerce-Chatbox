# Import Statements

from django.shortcuts import render, HttpResponse, redirect

from .models import Product
from .models import PromptLog

from django.views.decorators.csrf import csrf_exempt

import json

from django.db.models import Q
from django.conf import settings
from django.http import JsonResponse

import re

# view for fething products
@csrf_exempt
def getProducts(request):
    if request.method == "POST":

        body_unicode = request.body.decode('utf-8')

        # Parse JSON string to Python dict

        data = json.loads(body_unicode)

        # Limiting Response length to create Load More feature

        limit = data['limit']

        products_fetched = Product.objects.all()

        list_products = list(products_fetched.values())

        required_products = list_products[0: int(limit)+1]

        context = {
            "products": required_products,
            "limit": limit
        }

        return JsonResponse(context)
    
    else:

        context = {
            "message": "Only POST Method Allowed"
        }

        return JsonResponse(context)
    
@csrf_exempt
def getProduct(request):
    if request.method == "POST":

        body_unicode = request.body.decode('utf-8')

        # Parse JSON string to Python dict

        data = json.loads(body_unicode)

        id = data['id']

        fetched_product = Product.objects.filter(id=int(id))

        product_data = list(fetched_product.values())

        context = {
            "product": product_data,
            "id": id
        }

        return JsonResponse(context)
    
    else:

        context = {
           "message": "Only POST Method Allowed"
        }

        return JsonResponse(context)
    
@csrf_exempt
def chat(request):
    if request.method == "POST":
        
        body_unicode = request.body.decode('utf-8')

        # Parse JSON string to Python dict

        data = json.loads(body_unicode)

        user_id = data['user_id']
        prompt = data['prompt']

        # Saving User prompt for later retrieval and analysis
        new_prompt = PromptLog(user_id = user_id, prompt = prompt)

        new_prompt.save()

        # Regex For Identifying User Queries

        smartphone_query_regex = r"\b(smartphone|smartphones|mobile|mobiles|phone|phones|cellphone|cellphones|android|apple|iphone|iphones|samsung|oneplus|xiaomi|oppo|vivo|realme|pixel|nokia|motorola)\b"
        price_regex = r"(?:under|below|less than|upto|up to|for|price (?:is|of|at)?|cost(?:s)?(?: is| of| at)?|$|dollars\.?|inr)?\s*([₹₹]?\s?\d{1,3}(?:[,\d{3}]*)(?:k|K|lakh|Lakh)?)(?=\b|$)"
        model_regex = r"\b(?:iphone|samsung|oneplus|xiaomi|oppo|vivo|realme|pixel|nokia|motorola)\s*[\w\d\- ]+\b"
        greeting_regex = r"/(^|\s)(h(ello|i|ey|ola)|greetings|good\s(morning|afternoon|evening|day)|sup|yo)(\s|$|[!\?\.])/i"
        farewell_regex = r"(?i)\b(good(bye|night)|bye|see you|farewell|take care|adios|ciao)\b"

        if re.search(greeting_regex, prompt, re.IGNORECASE):
            return JsonResponse({
                "message": "Hey there! How can I help you?"
            })
        
        if re.search(farewell_regex, prompt, re.IGNORECASE):
            return JsonResponse({
                "message": "Bye Bye! Have a nice day!"
            })

        
        if re.search(smartphone_query_regex, prompt, re.IGNORECASE):

            products_fetched = Product.objects.all()

            products_coll = list(products_fetched.values())

            model_match = re.search(model_regex, prompt, re.IGNORECASE)

            price_match = re.search(price_regex, prompt, re.IGNORECASE)

            if model_match:
                actual_model = model_match.group(0).split(" ")[0].capitalize()
                products_fetched = Product.objects.filter(brand=actual_model)

                products_list = list(products_fetched.values())

                if len(products_list) == 0:
                    query = Q()
                    keywords = [model_match.group(0)]
                    for kw in keywords:
                        query &= Q(title__icontains=kw)

                    products_fetched = Product.objects.filter(query)

                    products_list = list(products_fetched.values())

                return JsonResponse({
                    "products": products_list
                })
            
            elif price_match:
                print(price_match.group(0))
                
                products_fetched = Product.objects.filter(price__lte=price_match.group(0))
                products_list = list(products_fetched.values())

                return JsonResponse({
                    "products":products_list
                })
            
            else:
                return JsonResponse({
                    "products": products_coll
                })
            
        else:
            return JsonResponse({
                "message": "This is a basic product search chatbot, it can only handle products intent query from user. It can be optimised more to handle other intent queries as well."
            })

    else:

        context = {
            "message": "Only POST Method Allowed"
        }

        return JsonResponse(context)