var chatList={
    chats: [],
    user:false,
    addChat:function(chat){
      this.chats.push({
        chat:chat,
        user:this.user
      });
    },
    toggleUser:function(){
      this.user=!this.user;
    }
  };
  
  var handlers={
    addChat:function(){
      
      var chat=document.getElementById('chat');
      if(chat.value==="") return;
      else{
        chatList.addChat(chat.value);
        chat.value='';
        view.displayChats();
      }
    }
  };
  
  var view={
    displayChats: function(){
      var chatUl=document.querySelector('ul');
      chatUl.innerHTML='';
      
      for(var i=0;i<chatList.chats.length;i++){
        var chatLi =document.createElement('li');
        chatLi.textContent=chatList.chats[i].chat;
        if(chatList.chats[i].user==false){
          chatLi.className='right';
        }else chatLi.className='left';
        chatUl.appendChild(chatLi);
      }
      chatUl.scrollTop = chatUl.scrollHeight;
    }
  };
  
  //To click button on pressing Enter
  var input=document.getElementById('chat');
  input.addEventListener('keydown',function(event){
    if(event.keyCode===13){
      event.preventDefault();
      handlers.addChat();
    }else if(event.keyCode===9){
        event.preventDefault();
        chatList.toggleUser();
    }
  });
  