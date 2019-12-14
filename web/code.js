
  var obj;


function myFunction() {

  document.getElementById("demo").innerHTML = "Hello World";

  var ul = document.createElement('ul');
  ul.id = "list";

  var article = document.getElementById("bitcoinList");

  article.appendChild(ul);

  var li = document.createElement('li');
  ul.appendChild(li);



  console.log(ul);

}

function loadDoc() {

  var xhttp = new XMLHttpRequest();
  // Aqui se ejecuta la respuesta de el ajax
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

		var response = JSON.parse(this.responseText)

    	if(obj === undefined 
    		||
    			!(obj.data.bpi.USD.rate === response.bpi.USD.rate 
	    		&& obj.data.bpi.EUR.rate === response.bpi.EUR.rate 
	    		&& obj.data.bpi.GBP.rate === response.bpi.GBP.rate)){

		      obj = {
		      	data: JSON.parse(this.responseText)
		      };
		      
		       console.log('obj');
		      console.log(obj);


		      var bitcoinUSD = obj.data.bpi.USD.rate;
		      var bitcoinEUR = obj.data.bpi.EUR.rate;
		      var bitcoinGBP = obj.data.bpi.GBP.rate;
		      var time = obj.data.time.updated;

			  var ul = document.createElement('ul');
			  ul.id = "list";
			  ul.classList.add('article-list')

			  var article = document.getElementById("bitcoinList");

			  //Time
			  var li = document.createElement('li');
			  li.innerHTML = time
			  ul.appendChild(li);
		 
			  li.classList.add('article-itemTitle')

			  //USD
			  var li = document.createElement('li');
			  li.innerHTML = bitcoinUSD
			  ul.appendChild(li);

			  li.classList.add('article-itemTitle')

			  //EUR
			  var li = document.createElement('li');
			  li.innerHTML = bitcoinEUR
			  ul.appendChild(li);

			  li.classList.add('article-itemTitle')

			  //BPS
			  var li = document.createElement('li');
			  li.innerHTML = bitcoinGBP
			  ul.appendChild(li);

			  li.classList.add('article-itemTitle')
			 

		      article.appendChild(ul);

    	}


    }
  };

  xhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);

  xhttp.send();
}

