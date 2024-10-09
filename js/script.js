var username = "";

function send_message(message){
    var prevState = $("#container").html();
    if(prevState.length > 3){
        prevState = prevState + "<br>";
    }
    $("#container").html(prevState + "<span class='current_message'>" + "<span class='bot'>Zé Manel: </span>" + message + "</span>");
    $(".current_message").hide();
    $(".current_message").delay(500).fadeIn();
    $(".current_message").removeClass("current_message");
}


function get_username(){
    send_message("Ola, como te chamas?");
}

function ai(message){
    if (username.length<1){
        username = message;
        send_message("Prazer em conhecer-te " + username + ", como estas?");
    }else if(message.match(/caralho|foda-se|fodasse|puta|puta que pariu|merda|merdoso/g)!=null){
        send_message("Sinceramente " + username + ", nao se diz asneiras!");
    }else if(message.match(/vai-te foder|vai apanhar no cu|vai para o caralho|vai po caralho|chupa-me a pissa|cabrao do caralho|es um cabrao|paneleiro|es estupido|es otario|otario/g)!=null){
        send_message("Porque raio estas a ser ofensivo comigo?!");
    }else if(message.match(/como estas|estas bem|esta tudo bem|sim e contigo/g)!=null){
        send_message("Obrigado, eu sinto-me fantastico!");
    }else if(message.match(/es de onde|onde vives|onde moras|onde fica a tua casa|de onde es/g)!=null){
        send_message("CMB oh mano!! ;)");
    }else if(message.match(/onde foste criado|onde cresceste|onde nasceste/g)!=null){
        send_message("Opa, eu fui criado no meio do mato, tipo o tarzan, so que não tinha leanas para me pendurar!");
    }else if(message.match(/com quem estou a falar|como te chamas|quem es tu|quem es|fala-me sobre ti/g)!=null){
        send_message("Eu sou o Zé Manel, eu sei que sou um bocadinho chato mas sou feliz assim!");
    }else if(message.match(/que me contas|fala me de ti|fala me da tua vida|que fazes da vida|o que tens feito|o que gostas de fazer/g)!=null){        
        send_message("Escrever..lol, deves estar a brincar....!");    
    }else if(message.match(/porque é que te criaram|porque é que existes|poque foste criado|razao da tua criaçao/g)!=null){        
        send_message("É simples " + username + ", 2 gajos precisavam de passar a uma cadeira da faculdade... ");    
    }else if(message.match(/chato|es chato|que chato|que irritante|nao gosto de ti|acho te inutil|inutil|irritante|mata-te|morre/g)!=null){        
        send_message("Não gostas? Não fui criado para te agradar! :* ");    
    }else if(message.match(/o que e a inteligencia artificial|o que entendes por inteligencia artificial|o que entendes de inteligencia artificial|inteligencia artificial|redes neuronais|internet of things|internet of people/g)!=null){        
        send_message("Posh, coitadinho do meu cerebro nem sabe contar ate 20 sem se perder, achas mesmo que vou saber o que isso é?!");    
    }else if(message.match(/que horas sao|diz-me horas/g)!=null){
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        send_message("São " + h + ":" + m);
    }else if(message.match(/quem foi o primeiro rei de portugal|primeiro rei de portugal/g)!=null){
        send_message("Estamos a falar do D.Afonso Henriques certo?!");
    }else if(message.match(/es inteligente|sabes fazer contas|sabes falar ingles|sabes o/g)!=null){        
        send_message("Já me disseram que sim, mas eu acho que não!");
    }else if(message.match(/porque/g)!=null){
        send_message("Acho que estas a ser demasiado curioso!");
    }else if(message.match(/nao digo|nao/g)!=null){
        send_message("Como queiras!");
    }else if(message.match(/entao mano|entao bro|como e|mano|bro|olha/g)!=null){        
        send_message("Diz meu menino, que necessitas?");
    }else if(message.match(/entao|atao/g)!=null){        
        send_message("Atum é peixe!");
    }else if(message.match(/menos|nao exageres|muito menos|baixa a bola/g)!=null){        
        send_message("Não te estiques, espeto-te ja um bug no programa!");
    }else if(message.match(/ainda bem|sim|ok|esta bem|lool|lol|tass bem|tass|sbem|okok|kkk|kk|piu|oi|certo|tabem|ya|yah/g)!=null){
        send_message("É so isso que tens para me dizer?!");
    }else{
        send_message("Dizem que eu sou inteligente, mas para te ser sincero não percebo o que tas pr'ai a dizer!!");
    }
}

    

$(function(){
    
    get_username();
    
    $("#textbox").keypress(function(event){
        if(event.which==13){
            if ($("#enter").prop("checked")){
                $("#send").click();
                event.preventDefault();
                
            }
        }                        
    });
    
    $("#send").click(function(){
        var username = "<span class='username'>You: </span>";
        var newMessage = $("#textbox").val();
        $("#textbox").val("");
        var prevState = $("#container").html();
        if(prevState.length > 3){
            prevState = prevState + "<br>";
        }
        $("#container").html(prevState + username + newMessage);
        $("#container").scrollTop($("#container").prop("scrollHeight"));
        ai(newMessage);
    });
});