
let count = 0;

// BGMを設定
$("#bgm")[0].volume = 0.3;
$("#bgm")[0].play();

// グーボタン
$(".aa").on("click", function () {
 
  var random = Math.floor(Math.random() * 3);
  console.log(random, "ランダムな数字");

  if (random === 0) {
    console.log("グー");
    $(".a").html('<img src="./img/じゃんけんグー.jpg" alt="グー">');
    $(".b").html("あいこ");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });
  } else if (random === 1) {
    console.log("チョキ");
    $(".a").html('<img src="./img/じゃんけんチョキ.jpg" alt="チョキ">');
    $(".b").html("勝ち");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });

    count++;

    console.log("勝利回数:", count);
  
    // 5回勝利でクリア
    if (count === 5) {
      $(".kumamon").css({
        "overflow" : "hidden"
      })
      $(".kumamon").html('<img src="./img/kumamon-win.png" alt="ハッピーくまもん">');
      $(".kumamon img").css({
        "width" : "300px",
        "height": "auto",
      })
      $(".b").html("やったね！");
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
      $(".aa, .bb, .cc").hide();  // 5回勝利でじゃんけんボタンを非表示
      $(".reset").show(); // 5回勝利したらリセットボタンを表示
      
    } else {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
    }

    // コインの大きさを設定
    $(".c img").css({
      "width" : "40px",
      "height": "auto",
    })

    // コインを中央に配置
    $(".c").css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    })

  } else if (random === 2) {
    console.log("パー");
    $(".a").html('<img src="./img/じゃんけんパー.jpg" alt="パー">');
    $(".b").html("負け");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });
  }
  });

// チョキボタン
$(".bb").on("click", function () {

  var random = Math.floor(Math.random() * 3);
  console.log(random, "ランダムな数字");

  if (random === 0) {
    console.log("グー");
    $(".a").html('<img src="./img/じゃんけんグー.jpg" alt="グー">');
    $(".b").html("負け");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });
  } else if (random === 1) {
    console.log("チョキ");
    $(".a").html('<img src="./img/じゃんけんチョキ.jpg" alt="チョキ">');
    $(".b").html("あいこ");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });
  } else if (random === 2) {
    console.log("パー");
    $(".a").html('<img src="./img/じゃんけんパー.jpg" alt="パー">');
    $(".b").html("勝ち");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });

    count++;

    console.log("勝利回数:", count);

    // 5回勝利でクリア
    if (count === 5) {
      $(".kumamon").css({
        "overflow" : "hidden"
      })
      $(".kumamon").html('<img src="./img/kumamon-win.png" alt="ハッピーくまもん">');
      $(".kumamon img").css({
        "width" : "300px",
        "height": "auto",
      })
      $(".b").html("やったね！");
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');

      $(".aa, .bb, .cc").hide();  // 5回勝利でじゃんけんボタンを非表示
      $(".reset").show(); // 5回勝利したらリセットボタンを表示

    } else {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
    }

    // コインの大きさを設定
    $(".c img").css({
      "width" : "40px",
      "height": "auto",
    })

    // コインを中央に配置
    $(".c").css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    })

  }
  });

// パーボタン
  $(".cc").on("click", function () {

  var random = Math.floor(Math.random() * 3);
  console.log(random, "ランダムな数字");

  if (random === 0) {
    console.log("グー");
    $(".a").html('<img src="./img/じゃんけんグー.jpg" alt="グー">');
    $(".b").html("勝ち");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });

    count++;

    console.log("勝利回数:", count);

    // 5回勝利でクリア
    if (count === 5) {
      $(".kumamon").css({
        "overflow" : "hidden"
      })
      $(".kumamon").html('<img src="./img/kumamon-win.png" alt="ハッピーくまもん">');
      $(".kumamon img").css({
        "width" : "300px",
        "height": "auto",
      })
      $(".b").html("やったね！");
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');

      $(".aa, .bb, .cc").hide();  // 5回勝利でじゃんけんボタンを非表示
      $(".reset").show(); // 5回勝利したらリセットボタンを表示

    } else {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
    }

    // コインの大きさを設定
    $(".c img").css({
      "width" : "40px",
      "height": "auto",
    })

    // コインを中央に配置
    $(".c").css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    })

  } else if (random === 1) {
    console.log("チョキ");
    $(".a").html('<img src="./img/じゃんけんチョキ.jpg" alt="チョキ">');
    $(".b").html("負け");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });
  } else if (random === 2) {
    console.log("パー");
    $(".a").html('<img src="./img/じゃんけんパー.jpg" alt="パー">');
    $(".b").html("あいこ");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "180px"
    });
  }
  });

  // リセットボタン
  $(".reset").on("click", function () {
    count = 0;
    $(".kumamon").html(`
      <img src="./img/kumamon.webp" alt="くまもん">
      <h1 class="a">何を出そうかな？</h1>
    `);
    $(".aa, .bb, .cc").show();  // じゃんけんボタンを再表示
    $(".reset").hide(); // リセットボタンを非表示

    
    $(".kumamon").css("flex-direction","column");

    $(".b").html("");
    $(".c").html("");
    $(".d").html("");
  });