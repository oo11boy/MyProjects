export const myinfo=
    {
        aboutmetext:"سلام، من یک برنامه‌نویس فرانت‌اند با علاقه بی‌نهایت به تکنولوژی‌های وب هستم. به عنوان یک عاشق طراحی و توسعه رابط‌های کاربری، همیشه به دنبال ایده‌های نوآورانه برای بهبود تجربه کاربری هستم. در طی 5 سال تجربه  کدنویسی، توانسته‌ام با HTML ، CSS  و JavaScript به راحتی رابط‌های کاربری مدرن و واکنش‌گرا ایجاد کنم. همچنین، به مدت بیش از 2 سال است که تجربه کار با کتابخانه معروف یعنی React را نیز دارم و با استفاده از آنها پروژه‌هایی با کد مناسب ایجاد کرده‌ام. در اضافه به تخصص‌های فنی، مهارت‌های کار گروهی و ارتباط موثر با تیم‌ها را نیز به خوبی توسعه داده‌ام. عموماً در پروژه‌ها، با استفاده از روحیه همکاری و توافق، تلاش می‌کنم تا به بهترین نتیجه‌ای برسیم. بنده همیشه به دنبال یادگیری تکنولوژی‌های جدید و پیشرفته هستم. اگر به دنبال برنامه‌نویسی فرانت‌اند توانمند، کارآمد و انگیزه‌مند هستید، بسیار خوشحال می‌شوم که به عنوان یک همکار در پروژه‌های شما شرکت کنم.",
        aboutmetext2:"من در سال ها گذشته تجربیاتی نیز در قسمت بک اند سایت داشته ام و با زبان برنامه نویسی php کار کرده ام و به واسطه آن با زبان ارتباط با دیتابیس یعنی sql و همچنین دیتابیس mysql آشنایی دارم و همچنین توانایی ساخت Api و را دارم اما حرفه اصلی من در قسمت فرانت اند سایت است اما با قسمت بک اند نیز در حد متوسط  آشنایی دارم."
       ,aboutmetext3:"علاوه بر react js  بنده تجربیاتی در ساخت اپلیکیشن اندروید با react native  نیز دارم که یکی از این اپلیکیشن ها را در اپلیکیشن مایکت منتشر کرده ام که لینک آن را در قسمت نمونه کارها قرار داده ام."
     ,  reactjstext:"در طول بیش از دو سال تجربه در برنامه‌نویسی با ReactJS، توانستم تلاش‌های زیادی را در جهت یادگیری و بهبود مهارت‌هایم در این کتابخانه انجام دهم و پروژه های مناسبی را با این کتابخانه ایجاد کنم. "
     ,  responsivetext:"این یکی از آن مهارت هایی است که هر برنامه نویس فرانت اند باید به آن مسلط باشد و بنده با تسلط بر این مهارت میتوانم پروژه هایی کاملا ریسپانسیو و مناسب نمایشگر های مختلف طراحی کنم."
  
    }


    export const allposts = [
      {
        id: 1,
        userid: 21,
        hashtag: "#طبیعت #منظره",
        img: "https://www.samatak.com/image/2019/04/2/1349973751-samatak-com.jpg",
        like: 33,
        comment: [
          { id: 1, userid: 25, username: "navidyosefi", text: "عالیه" },
          { id: 1, userid: 25, username: "navidyosefi", text: "خوبه" },
          { id: 1, userid: 25, username: "navidyosefi", text: "باحاله" },
          { id: 1, userid: 25, username: "navidyosefi", text: "چه جالب" },
          { id: 1, userid: 25, username: "navidyosefi", text: "واو" },
        
        ],
        caption: "لذت بردن از زیبایی طبیعت! 🌿🌼\nیک روز زیبا با دوستان.\nشعور آرامش در هر نفس. \nهمراه با آوای طبیعت."
      },
      {
        id: 2,
        userid: 22,
        hashtag: "#معماری #منظره_شهری",
        img: "https://images.squarespace-cdn.com/content/v1/61afda8749a97e6db2e64ae0/1648253869084-7TB2S9ASUG7DS6VCB131/Brasa_0437.jpg",
        like: 28,
        comment: [
          { id: 1, userid: 26, username: "arash.m", text: "خیلی خوبه!" },
          { id: 2, userid: 27, username: "sara_89", text: "عکس زیباست." }
        ],
        caption: "کاوش در معماری شهری! 🏙️✨\nشهری مدرن و زیبا.\nجاده‌ای از رویاها.\nبازتاب زندگی در بن‌مایه‌ها."
      },
      {
        id: 3,
        userid: 23,
        hashtag: "#غروب #آسمان",
        img: "https://www.img2go.com/assets/dist/sample-files/img/convert_to_jpg.png",
        like: 45,
        comment: [
          { id: 1, userid: 28, username: "mohsen_72", text: "عکس جالبیه!" },
          { id: 2, userid: 29, username: "maryam77", text: "خیلی عالیه!" }
        ],
        caption: "شاهد غروب خیره‌کننده! 🌅😍\nلحظاتی از آرامش.\nرنگینی‌های خداوند در آسمان.\nپایان یک روز دلنشین."
      },
      {
        id: 4,
        userid: 24,
        hashtag: "#جنگل #زیبا",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Belle_nature.jpg",
        like: 52,
        comment: [
          { id: 1, userid: 30, username: "ali_135", text: "عکس خیلی زیباست!" },
          { id: 2, userid: 31, username: "zahraa123", text: "دوست داشتنیه!" }
        ],
        caption: "گردش در جنگل‌های زیبا! 🌳🍃\nدر آغوش طبیعت.\nصلح و آرامش در هر گوشه."
      },
      {
        id: 5,
        userid: 25,
        hashtag: "#کوه #ماجراجویی",
        img: "https://www.docusign.com/static-c-assets/styles/hero_standard__2x_mobile/public/30713_247f9457ceb64464bcad1713c767a083_1505350677_1.jpg",
        like: 36,
        comment: [
          { id: 1, userid: 32, username: "amir_ali", text: "عالیه!" },
          { id: 2, userid: 33, username: "fatemeh_123", text: "خیلی زیباست." }
        ],
        caption: "پیمودن قله‌های کوهستانی! ⛰️🌄\nماجراجویی در ارتفاعات.\nچشم انتظار تماشای مناظر شگفت‌انگیز."
      },
      {
        id: 6,
        userid: 22,
        hashtag: "#دریا #سکوت",
        img: "https://www.adobe.com/acrobat/hub/media_12b27eb701c9843393ecfa9277ba172d6bbf08cfe.jpeg?width=1200&format=pjpg&optimize=medium",
        like: 29,
        comment: [
          { id: 1, userid: 34, username: "reza_98", text: "واقعا عالیه!" },
          { id: 2, userid: 35, username: "narges_65", text: "زیباست!" }
        ],
        caption: "لحظاتی از سکوت در اعماق دریا! 🌊🐟\nهمراه با آرامش.\nحس آزادی در ارتعاش موج‌ها."
      },
      {
        id: 7,
        userid: 22,
        hashtag: "#پارک #سبز",
        img: "https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/character-illustration-v2.jpg",
        like: 41,
        comment: [
          { id: 1, userid: 36, username: "mehdi_23", text: "عکس فوق‌العاده‌ایه!" },
          { id: 2, userid: 37, username: "parisa_44", text: "محشره!" }
        ],
        caption: "گردش در پارک‌های سبز! 🌳🌷\nلذت بردن از آرامش و طبیعت.\nزمانی آرام و شاد."
      },
      {
        id: 8,
        userid: 22,
        hashtag: "#گل #باغ",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Kid_on_Beach_Looking_at_the_Sky_in_the_Sand.jpg",
        like: 48,
        comment: [
          { id: 1, userid: 38, username: "sajjad_76", text: "خیلی عالیه!" },
          { id: 2, userid: 39, username: "leila_21", text: "زیباست." }
        ],
        caption: "گردش در باغ‌های پر از گل! 🌺🌼\nرنگارنگی از طبیعت.\nلحظات شادی و آرامش."
      },
      {
        id: 9,
        userid: 22,
        hashtag: "#ساحل #خورشید",
        img: "https://golikhanoom.ir/wp-content/uploads/2023/11/aks-gol-v-manzare-ziba-baraye-porofail-21.jpg",
        like: 37,
        comment: [
          { id: 1, userid: 40, username: "hassan_444", text: "عکس خوبیه!" },
          { id: 2, userid: 41, username: "sahar_111", text: "زیباست." }
        ],
        caption: "گردش در سواحل زیبا! 🏖️☀️\nغروب زیبای خورشید.\nلحظات شادی و آرامش."
      },
      {
        id: 10,
        userid: 22,
        hashtag: "#شهر #شب",
        img: "https://www.samatak.com/image/2019/04/2/143247794-samatak-com.jpg",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },
      {
        id: 11,
        userid: 23,
        hashtag: "#شهر #شب",
        img: "https://images.unsplash.com/photo-1608229191360-7064b0afa639?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjU4NDQ1NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },
      {
        id: 10,
        userid: 12,
        hashtag: "#شهر #شب",
        img: "https://www.samatak.com/image/2019/04/2/674334587-samatak-com.jpg",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },
      {
        id: 10,
        userid: 20,
        hashtag: "#شهر #شب",
        img: "https://www.samatak.com/image/2019/04/2/835849346-samatak-com.jpg",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },
      {
        id: 10,
        userid: 13,
        hashtag: "#شهر #شب",
        img: "https://www.samatak.com/image/2019/04/2/1288880649-samatak-com.jpg",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },

      {
        id: 10,
        userid: 13,
        hashtag: "#شهر #شب",
        img: "https://www.samatak.com/image/2019/04/2/153974382-samatak-com.jpg",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },

      {
        id: 10,
        userid: 13,
        hashtag: "#شهر #شب",
        img: "https://images.unsplash.com/photo-1606829192980-9a547ffc918c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjU4NDYyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },


      {
        id: 10,
        userid: 13,
        hashtag: "#شهر #شب",
        img: "https://www.samatak.com/image/2019/04/2/1308667820-samatak-com.jpg",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },
      {
        id: 10,
        userid: 13,
        hashtag: "#شهر #شب",
        img: "https://www.samatak.com/image/2019/04/2/1899207617-samatak-com.jpg",
        like: 55,
        comment: [
          { id: 1, userid: 42, username: "reza_99", text: "خیلی زیباست!" },
          { id: 2, userid: 43, username: "neda_57", text: "دوست داشتنیه." }
        ],
        caption: "پیاده‌روی در خیابان‌های شهر! 🌃🚶‍♂️\nنورهای درخشان شب.\nلحظاتی از آرامش و فکر."
      },
      {
        id: 1,
        userid: 22,
        hashtag: "#طبیعت #منظره",
        img: "https://www.samatak.com/image/2019/04/2/948714177-samatak-com.jpg",
        like: 33,
        comment: [
          { id: 1, userid: 25, username: "navidyosefi", text: "عالیه" },
          { id: 1, userid: 25, username: "navidyosefi", text: "خوبه" },
          { id: 1, userid: 25, username: "navidyosefi", text: "باحاله" },
          { id: 1, userid: 25, username: "navidyosefi", text: "چه جالب" },
          { id: 1, userid: 25, username: "navidyosefi", text: "واو" },
        
        ],
        caption: "لذت بردن از زیبایی طبیعت! 🌿🌼\nیک روز زیبا با دوستان.\nشعور آرامش در هر نفس. \nهمراه با آوای طبیعت."
      },
      {
        id: 2,
        userid: 22,
        hashtag: "#معماری #منظره_شهری",
        img: "https://www.samatak.com/image/2019/04/2/1795364705-samatak-com.jpg",
        like: 28,
        comment: [
          { id: 1, userid: 26, username: "arash.m", text: "خیلی خوبه!" },
          { id: 2, userid: 27, username: "sara_89", text: "عکس زیباست." }
        ],
        caption: "کاوش در معماری شهری! 🏙️✨\nشهری مدرن و زیبا.\nجاده‌ای از رویاها.\nبازتاب زندگی در بن‌مایه‌ها."
      },
      {
        id: 3,
        userid: 23,
        hashtag: "#غروب #آسمان",
        img: "https://www.samatak.com/image/2019/04/2/675673547-samatak-com.jpg",
        like: 45,
        comment: [
          { id: 1, userid: 28, username: "mohsen_72", text: "عکس جالبیه!" },
          { id: 2, userid: 29, username: "maryam77", text: "خیلی عالیه!" }
        ],
        caption: "شاهد غروب خیره‌کننده! 🌅😍\nلحظاتی از آرامش.\nرنگینی‌های خداوند در آسمان.\nپایان یک روز دلنشین."
      },
      {
        id: 4,
        userid: 24,
        hashtag: "#جنگل #زیبا",
        img: "https://www.samatak.com/image/2019/04/2/1853826860-samatak-com.jpg",
        like: 52,
        comment: [
          { id: 1, userid: 30, username: "ali_135", text: "عکس خیلی زیباست!" },
          { id: 2, userid: 31, username: "zahraa123", text: "دوست داشتنیه!" }
        ],
        caption: "گردش در جنگل‌های زیبا! 🌳🍃\nدر آغوش طبیعت.\nصلح و آرامش در هر گوشه."
      },
      {
        id: 5,
        userid: 25,
        hashtag: "#کوه #ماجراجویی",
        img: "https://www.samatak.com/image/2019/04/2/1478846479-samatak-com.jpg",
        like: 36,
        comment: [
          { id: 1, userid: 32, username: "amir_ali", text: "عالیه!" },
          { id: 2, userid: 33, username: "fatemeh_123", text: "خیلی زیباست." }
        ],
        caption: "پیمودن قله‌های کوهستانی! ⛰️🌄\nماجراجویی در ارتفاعات.\nچشم انتظار تماشای مناظر شگفت‌انگیز."
      },
      {
        id: 6,
        userid: 22,
        hashtag: "#دریا #سکوت",
        img: "https://www.samatak.com/image/2019/04/2/383895503-samatak-com.jpg",
        like: 29,
        comment: [
          { id: 1, userid: 34, username: "reza_98", text: "واقعا عالیه!" },
          { id: 2, userid: 35, username: "narges_65", text: "زیباست!" }
        ],
        caption: "لحظاتی از سکوت در اعماق دریا! 🌊🐟\nهمراه با آرامش.\nحس آزادی در ارتعاش موج‌ها."
      },
      {
        id: 7,
        userid: 22,
        hashtag: "#پارک #سبز",
        img: "https://www.samatak.com/image/2019/04/2/1463285296-samatak-com.jpg",
        like: 41,
        comment: [
          { id: 1, userid: 36, username: "mehdi_23", text: "عکس فوق‌العاده‌ایه!" },
          { id: 2, userid: 37, username: "parisa_44", text: "محشره!" }
        ],
        caption: "گردش در پارک‌های سبز! 🌳🌷\nلذت بردن از آرامش و طبیعت.\nزمانی آرام و شاد."
      },

      // بقیه پست‌ها با هشتگ‌ها و عنوان‌های مرتبط...
    ];
    
    