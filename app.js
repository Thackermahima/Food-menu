const JSONdata =
{
    "menu": {
        "slice of pizza": "2.00",
        "toppings": {
            "pepperoni": ".25",
            "meatballs": ".35",
            "mushrooms": ".40",
            "olives": ".20"
        },
        "sides": {
            "potato salad": "1.25",
            "hummus": "2.50",
            "caesar salad": "3.50",
            "garden salad": "2.25"
        },
        "drinks": {
            "soda": {
                "small": "1.95",
                "medium": "2.20",
                "large": "2.50"
            },
            "juice": "2.00",
            "water": "1.25"
        }
    }
}

const isObject = function (val) {
    if (val === null) {
        return false;
    }
    return (typeof val == 'object');
}
const objProps = function (obj) {
    for (let val in obj) {
        if (isObject(obj[val])) {
            objProps(obj[val]);
        } else {
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.innerHTML += `${val} : ${obj[val]}`;
            ul.appendChild(li);
            document.body.appendChild(ul);
            //console.log(ul);

            li.addEventListener("click", function (e) {
                const storeOrder = [e.target.innerHTML];
                localStorage.storeOrder = JSON.stringify(storeOrder);
                var itemNames = JSON.parse(localStorage.storeOrder);
                btn.addEventListener("click",function(){
                    alert(storeOrder);
                })
                //console.log(itemNames);
                //console.log(e.target.innerHTML);
            });


        }
    }
}
objProps(JSONdata);

const btn = document.createElement('button');
btn.textContent = 'Your Order';
document.body.appendChild(btn);



