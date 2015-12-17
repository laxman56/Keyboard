function CreateKeyBoard(){
  that = this;
	document.getElementById('keyBoard');

  this.appendTo = function(parentElement){
    console.log('create keyboard');
    parentElement.appendChild(this.element);
  }

  this.createKey = function(keyName,keyType){
    this.element = document.createElement('div');
    // console.log(keyName,keyType,'mustbe')
    // console.log(this.element,'check');

    if(keyType == 'high')
      this.element.className = 'key' + ' high-note';
    else
      this.element.className = 'key';

    this.element.id = keyName;
  
    if(keyName == 'c4#' || keyName == 'f4#' || keyName == 'c5#'){
      this.element.style.marginLeft = 80 + 'px';
    }

    this.element.innerHTML = keyName;

    if(keyType == 'high'){
      document.getElementById('high-notes').appendChild(this.element);
    }
    else{

      document.getElementById('low-notes').appendChild(this.element);
    }
    // this.appendTo(document.getElementsByClassName('key-board')[0]);
      document.getElementById('keyBoard').style.textAlign = 'center';
      document.getElementById('keyBoard').style.fontSize = 25 + 'px';
      document.getElementById('keyBoard').style.color = 'red';

  }

  this.activeKey = function(keyName){
    console.log(keyName,'create');
    var keyClass = document.getElementById(keyName).className;
    console.log(keyClass);
    if(keyClass == 'key active' || keyClass == 'key high-note active'){}
    
    else
      document.getElementById(keyName).className = keyClass + ' active';
  }

  this.inActiveKey = function(keyName){
    var keyClass = document.getElementById(keyName).className;
    // console.log(keyClass,'inactive');
    var originalKeyClass = keyClass.replace(/active/i, '');
    // console.log(originalKeyClass,'original');
    document.getElementById(keyName).className = originalKeyClass;
  }

}