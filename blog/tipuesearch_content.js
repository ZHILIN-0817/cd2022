var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/ZHILIN-0817/cd2022 內容管理: https://zhilin-0817.github.io/cd2022/content/index.html 課程投影片: https://zhilin-0817.github.io/cd2022/reveal/index.html 課程網誌: https://zhilin-0817.github.io/cd2022/blog/index.html","tags":"misc","url":"https://zhilin-0817.github.io/cd2022/blog/pages/about/"},{"title":"WEEK16","text":"WEEK16 CoppeliaSim Python remote API 範例: 利用 tkinter GUI 介面 slider 控制 uArm 機械手臂 利用 OpenCV 擷取場景中的 Vision Sensor 串流影像 1.Visualization Stream","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w16-40923156.html"},{"title":"WEEK13","text":"WEEK13 WEEK13 下載CoppeliaSimEdu 利用Coppeliasim模擬機械運轉","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w13-40923156.html"},{"title":"WEEK12","text":"W12任務 week12 新增12周內容 cd2022_uarm_nx12_imported.7z 中, 若計入重複引用的零件, 總數有多少? 請列出組成此一 uarm 機械手臂所需的 BOM 列表. 若不計入重複引用的零件, 總數有多少? 請列出各零件名稱. 當執行機械手臂的設計過程中, 若已知各零件所擬採用的零件材料密度, 請問此一設計中的 uarm 機械手臂的淨重量為多少? (uArm-Swift-Specifications.pdf) 當執行機械手臂設計與製程規劃時, 若已知各零件擬採行的製造程序、取得方法與所需時間及成本, 請問此一設計中的 uarm 機械手臂, 該如何計算一定數量需求下, 需花費多少時間? 如何計算成本 w12-task 總共引用155個子零件 其中個別零件總數為58 全部零件才用 aluminum 總重1.4123kg 全部零件才用 steel 總重4.1062kg wink video https://zhilin-0817.github.io/cd2022/content/week12.html","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w12-40923156.html"},{"title":"WEEK10","text":"W10 block_ui W10 ssh WEEK10 https://zhilin-0817.github.io/cd2022/content/week10.html W10 block_ui https://zhilin-0817.github.io/cd2022/content/block%20ui.html W10 nx_integ https://zhilin-0817.github.io/cd2022/content/nx%20integ.html W10 ssh https://zhilin-0817.github.io/cd2022/content/ssh.html","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w10-40923156.html"},{"title":"WEEK7","text":"分別以 Solvespace, NX (12, 1980 或 2008) 及 Onshape, 完成各零件工程圖與組合圖後, 將 uarm 組合件轉為 STL 格式後轉入 CoppeliaSim WEEK8 我分配到的零件是減速箱下蓋以及軸承支撐圖 因為是用onshape繪製這次的uarm所以有些零件可以直接匯入 但碰到組合件還是需要拆開重畫沒有辦法使用匯入的 心得 這次的課程是協同需要小組跟大組合作，雖然跟上學期的課程有點類似，但還是學到很多不一樣的東西。 例如團隊分工以及工作的團隊在這個一起工作的溝通還有團隊的制度，我覺得這些很重要，因為這會影響我工作心情。在組長的領導下，跟其他組員的溝通沒有障礙然後大家都有照進度表的時間走，讓我們的分工順利完成我覺得很好。組合的部分在組裝過程遇到問題，遇到干涉問題 因為是協同不同人畫的零件放在一起組裝會有許多繁雜的問題，所以目前還在排解問題。之後模擬完成會在匯入一次。 零件圖網址: https://zhilin-0817.github.io/cd2022/content/week8.html","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w7-40923156.html"},{"title":"WEEk7","text":"WEEK7 使用老師規定的幾個繪圖軟體劃出零件並自訂尺寸以及完成組合圖 再使用coppeliasim將完成的組合件進行作動。 第一部分 Mde.tw網站中找到w7任務 git clone https://github.com/mdecourse/scarysim.git 修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS += -lglut -lGLU cd scarysim qmake -o Makefile scarysim.pro mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe 因為 scarysim.exe 執行需要 base.obj, arm1.obj, arm2.obj, arm3.obj 等零件外型檔案, 以及對應的 .mtl 材質檔案, 因此可將 scarysim.exe 移至倉儲根目錄, 並且需要 msys64_20210419\\mingw64\\bin 路徑中的 dll 動態連結程式庫配合執行. 由於此套程式碼在 Target 模式下, 零組件間會造成干涉, 表示其 Inverse Kinematic 運算並不正確, 請設法修正此錯誤後, 修改其零件尺寸與操作控制方法, 設法模擬 MTB 的 Pick and Place demo 範例. 請各組指定組員分別利用 Solvespace、NX12、NX1980、NX2008 與 Onshape 繪製 Pick and Place demo 範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案. 今天的繪圖軟體用onshape 1)使用onshape完成繪製零件 2)零件完成後進行組合。 3)組合完成後開啟coppeliasim進行模擬作動","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w7_summary.html"},{"title":"WEEK8     spring CD 課程","text":"分別以 Solvespace, NX (12, 1980 或 2008) 及 Onshape, 完成各零件工程圖與組合圖後, 將 uarm 組合件轉為 STL 格式後轉入 CoppeliaSim WEEK8 我們由組長分配零件給組員在限定的時間內完成零組件繪製並組裝完. 協同很需要團隊分配有系統並且充分的溝通是很重要的 一剛開始看到組合圖的樣子很想放棄不畫了 可是我們大組長把每個人的工作分配的很詳細 讓大家有方向的完成]自己的工作這點我覺得很好。","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w8-40923156.html"},{"title":"建立倉儲及Tokens的方式","text":"建立倉儲方式 Tokens 建立倉儲 先進去老師倉儲的cmsimde site 接著複製老師倉儲的網址 到Create a new repository點開import a repository 貼上剛剛複製的網址 將名稱設為cd2022 接著到小黑窗","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w6_firday.html"},{"title":"WEEK6     spring CD 課程","text":"LEO 用小黑窗打開leo 第一次打開並且設定各項功能 小黑窗指令 cd tmp cd cad2022 ca cad2022 leo 完成以下指令就能成功打開 leo 第二步驟 pelican設定順序 1)共用 2)遠端 3)近端 第三步驟 path markdown 找到 path page 將自己網站以及倉儲 的網址複製到 leo 並存取","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/40923156.html"},{"title":"2022 spring CD 課程","text":"2020 Fall 計算機程式的教學主要介紹 Python 與 Flutter 在機械設計流程中的應用. Python Python 可以用來開發單機版的視窗程式套件 Pyslvs-UI Python 可以用來開發網際版的內容管理系統 CMSiMDE Python 可以用來控制 CoppeliaSim 與 Webots 虛擬環境中的機電系統 Python 可以用於機器學習 Keras, Pytorch","tags":"Misc","url":"https://zhilin-0817.github.io/cd2022/blog/w6_40923156.html"}]};