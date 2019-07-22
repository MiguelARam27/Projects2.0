

  function Books(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        console.log(title+" "+author+',' +pages+' '+read);
    }

  }


  const book1 = new Books('Sard','mike','235','yes');
book1.info();