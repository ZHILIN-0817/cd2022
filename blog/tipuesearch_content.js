var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/ZHILIN-0817/cd2022 內容管理: https://zhilin-0817.github.io/cd2022/content/index.html/ 課程投影片: https://zhilin-0817.github.io/cd2022/reveal/index.html/reveal 課程網誌: https://zhilin-0817.github.io/cd2022/blog/index.html","tags":"misc","url":"./pages/about/"},{"title":"2022 spring CD 課程","text":"分別以 Solvespace, NX (12, 1980 或 2008) 及 Onshape, 完成各零件工程圖與組合圖後, 將 uarm 組合件轉為 STL 格式後轉入 CoppeliaSim WEEK8 我們由組長分配零件給組員在限定的時間內完成零組件繪製並組裝完. 協同很需要團隊分配有系統並且充分的溝通是很重要的 一剛開始看到組合圖的樣子很想放棄不畫了 可是我們大組長把每個人的工作分配的很詳細 讓大家有方向的完成]自己的工作這點我覺得很好。","tags":"Misc","url":"./w8-40923156.html"},{"title":"2022 spring CD 課程","text":"W7 分配繪圖軟體 WEEK7 使用老師規定的幾個繪圖軟體劃出零件並自訂尺寸以及完成組合圖 再使用coppeliasim將完成的組合件進行作動。 第一部分 Mde.tw網站中找到w7任務 git clone https://github.com/mdecourse/scarysim.git 修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS += -lglut -lGLU cd scarysim qmake -o Makefile scarysim.pro mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe 因為 scarysim.exe 執行需要 base.obj, arm1.obj, arm2.obj, arm3.obj 等零件外型檔案, 以及對應的 .mtl 材質檔案, 因此可將 scarysim.exe 移至倉儲根目錄, 並且需要 msys64_20210419\\mingw64\\bin 路徑中的 dll 動態連結程式庫配合執行. 由於此套程式碼在 Target 模式下, 零組件間會造成干涉, 表示其 Inverse Kinematic 運算並不正確, 請設法修正此錯誤後, 修改其零件尺寸與操作控制方法, 設法模擬 MTB 的 Pick and Place demo 範例. 請各組指定組員分別利用 Solvespace、NX12、NX1980、NX2008 與 Onshape 繪製 Pick and Place demo 範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案. 今天的繪圖軟體用onshape 1)使用onshape完成繪製零件 2)零件完成後進行組合。 3)組合完成後開啟coppeliasim進行模擬作動","tags":"Misc","url":"./w7_summary.html"},{"title":"2022 spring CD 課程","text":"2020 Fall 計算機程式的教學主要介紹 Python 與 Flutter 在機械設計流程中的應用. Python Python 可以用來開發單機版的視窗程式套件 Pyslvs-UI Python 可以用來開發網際版的內容管理系統 CMSiMDE Python 可以用來控制 CoppeliaSim 與 Webots 虛擬環境中的機電系統 Python 可以用於機器學習 Keras, Pytorch","tags":"Misc","url":"./w6_blog.html"}]};