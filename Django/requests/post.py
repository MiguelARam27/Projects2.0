import requests
my_data ={"name":"nick","email":"nick@example.com"}
r = requests.post("https://tryphp.w3schools.com/showphp.php?filename=demo_form_post", data = my_data)


f = open("myfile.html","w+")

f.write(r.text)