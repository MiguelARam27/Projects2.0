import requests 
from io import BytesIO
from PIL import Image

address = "https://www.bing.com/th/id/OIP.QFrJPxYZaBGw5Zeb9x8_GAHaEp?w=290&h=179&c=7&o=5&dpr=2&pid=1.7"

r = requests.get(address)

image = Image.open(BytesIO(r.content))


print(image.size,image.mode,image.format)
path = "./image." +image.format
try:
    image.save(path,image.format)
except IOError:
    print("cannot save image")
