import React from 'react';
import PriceOption from './PriceOption';

const PriceOptions = () => {

  const PriceData=  {
        "gymName": "FitPro Gym",
        "location": "123 Fitness Street, Wellness City",
        "pricingOptions": [
          {
            "id": 1,
            "planName": "Basic Membership",
            "duration": [
              {
                "id": 101,
                "timePeriod": "1 Month",
                "price": 20
              },
              {
                "id": 102,
                "timePeriod": "3 Months",
                "price": 50
              },
              {
                "id": 103,
                "timePeriod": "6 Months",
                "price": 90
              },
              {
                "id": 104,
                "timePeriod": "12 Months",
                "price": 150
              }
            ],
            "features": [
              "Access to gym equipment",
              "Locker facility"
            ]
          },
          {
            "id": 2,
            "planName": "Premium Membership",
            "duration": [
              {
                "id": 201,
                "timePeriod": "1 Month",
                "price": 40
              },
              {
                "id": 202,
                "timePeriod": "3 Months",
                "price": 110
              },
              {
                "id": 203,
                "timePeriod": "6 Months",
                "price": 200
              },
              {
                "id": 204,
                "timePeriod": "12 Months",
                "price": 350
              }
            ],
            "features": [
              "Access to gym equipment",
              "Locker facility",
              "Access to group classes",
              "Free personal training session (1 per month)"
            ]
          },
          {
            "id": 3,
            "planName": "Student Membership",
            "duration": [
              {
                "id": 301,
                "timePeriod": "1 Month",
                "price": 15
              },
              {
                "id": 302,
                "timePeriod": "3 Months",
                "price": 40
              },
              {
                "id": 303,
                "timePeriod": "6 Months",
                "price": 75
              },
              {
                "id": 304,
                "timePeriod": "12 Months",
                "price": 120
              }
            ],
            "features": [
              "Access to gym equipment",
              "Locker facility",
              "Student discounts on classes"
            ]
          }
        ],
        "additionalServices": [
          {
            "id": 401,
            "serviceName": "Personal Training",
            "pricePerSession": 30
          },
          {
            "id": 402,
            "serviceName": "Diet Consultation",
            "price": 50
          },
          {
            "id": 403,
            "serviceName": "Group Classes",
            "pricePerClass": 10
          }
        ]
      }
      

    return (
        <div>
            <p className="text-2xl ">Best Prices</p>
            <h1 className='grid grid-cols-3 gap-8 p-28'>
                {
                    PriceData.pricingOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
                }
            </h1>
        </div>
    );
};

export default PriceOptions;