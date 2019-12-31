
from bs4 import BeautifulSoup
from io import BytesIO
from PIL import Image
import requests


url = "https://www.bing.com/search"
search = input('search for : ')
param = {"q":search}
r = requests.get(url, params = param)

soup = BeautifulSoup(r.text, "html.parser")

links = soup.findAll('a',{"class":"thumb"})
# print(links)

for item in links:
    img_obj = requests.get(item.attrs("href"))
    title = item.attrs["href"].split("/")[-1]
    img = Image.open(BytesIO(img_obj.content))
    img.save("./scarped_images/"+title,img.format)