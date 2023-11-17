var OriginTitile = document.title,
      titleTime;
     document.addEventListener("visibilitychange",
     function() {
      if (document.hidden) {
        document.title = "你别走鸭，快回来 QWQ ~ ";
        clearTimeout(titleTime)
    } else {
        document.title = "欢迎回来吖！Happy Birthday ~ " ;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
    });