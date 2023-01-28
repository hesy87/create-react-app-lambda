import { useState } from "react";
import { DataContext } from "./dataContext";
import MapImage from "../assets/img/footer-map.png";
import LOGO from "../assets/img/LOGO.png";
import AcademyErtebatBeinFard from "../assets/img/academy-ertebet-bein-fard.png";
import AcademyTasmimSazi from "../assets/img/Academy-tasmim-sazi.png";
import AcademyTasvirSaziEtellat from "../assets/img/Academy-tasvirsazi-etelaat.png";
import ContactUsPic from "../assets/img/contsctus.png";
import Education from "../assets/img/education.png";
import Strategic from "../assets/img/strategic.png";
import tasvirsazitafsir from "../assets/img/tasvirsazitafsir.png";

const DataContextProvider = (props) => {
  //about us in main page data
  const [Title, setTitle] = useState({
    about: "درباره ما",
    pragraph: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
    از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
    متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
    درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
    نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
    خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
    داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
    پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
    سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
  });

  // foooooooooter
  const [FooterTitle, setFooterTitle] = useState({
    CompanyName: "فرتاک",
    ContactUs: "ارتباط با ما",
    Location: "ما کجاییم؟",
  });
  const [CompanyDescription, setCompanydDescription] =
    useState(`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
  متنوع با هدف بهبود ابزارهای کاربردی می`);
  const [Contact, setContact] = useState({
    PhoneNumber: "02188491226",
    FaxNumber: "02188491226",
    Email: "info@ttrf.com",
    Address:
      "تهران - کریم خان زند - خیابان مهاجر - کوچه مهاجر - پلاک 24 - واحد 3",
    mapImage: MapImage,
  });

  //navbar data
  const [DropDownMenuTitle, setDropDownMenuTitle] = useState({
    title: ["خدمات", "آکادمی"],
  });
  const [NavbarData, setNavbatData] = useState({
    DropDownMenu: [
      // {title : ["خدمات","آکادمی"]}
      // ["خدمات", "آموزش", "مشاوره استراتژیک", "education", "strategic"],
      // ["آکادمی", "تصمیم سازی مدیران", "تصویر سازی اطلاعات","ارتباطات بین فردی در سازمان", "decision"],
    ],
    NormalMenu: [
      ["درباره ما", "about-us"],
      ["تماس با ما", "contact"],
    ],
    LogoImage: LOGO,
  });

  //carousel data
  const [CarouselData, setCarouselData] = useState({
    CarouselInfo: [
      [
        AcademyErtebatBeinFard,
        "ارتباط بین فردی",
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      ],
      [
        AcademyTasmimSazi,
        "تصمیم سازی برای مدیران",
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      ],
      [
        AcademyTasvirSaziEtellat,
        "تصویر سازی و گزارشات",
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      ],
    ],
  });

  //tab in main page
  const tasminText = (
    <div>
      <p>
        تصمیم گیری در زمان و موقعیت مناسب مهمترین مسئولیتی است که بر عهده مدیران
        ارشد سازمان قرار دارد.
      </p>
      <ul className="me-5">
        <li>نقش استراتژیک مدیران میانی سازمان در ساخته شدن تصمیمات</li>
        <li className="my-2">عوامل عدم تصمیمگیری به موقع</li>
        <li>استراتژیهایی برای تغییر تصمیمات</li>
        <li className="my-2">زمینه های لازم برای یک تصمیم مناسب و به موقع</li>
      </ul>
    </div>
  );
  const tasvirText = (
    <div>
      <p>
        فرض کنید با حجم وسیعی از اعداد طرف هستید این اعداد همه از واقعیت حکایت
        میکنند و اما برای ما گنگ هستند تا وقتی نتوانیم نشانشان دهیم.
      </p>
      <p>
        در این دوره با دو رویکرد تولید گزارشات و تفسیر آنها تلاش خواهیم کرد شیوه
        های متفاوت نمایش اطلاعات را بررسی کنیم:
      </p>
      <ul className="me-5">
        <li>برای نشان دادن اطلاعات از چه رنگهایی استفاده کنیم؟</li>
        <li className="my-2">
          انواع نمودارها (ستونی، خطی، دایرهای، و...) برای نشان دادن کدام داده ها
          مناسبند؟
        </li>
        <li>چه داده هایی را میتوان کنار هم نشان داد؟</li>
        <li className="my-2">چطور فریب داده بازی و داده سازی را نخوریم؟</li>
      </ul>
    </div>
  );
  const ertebatText = (
    <div>
      <p>
        شاید بیراه نباشد اگر روابط و ارتباطات را پرکاربرد ترین و در عین حال
        مناقشه برانگیز ترین مفهوم در ادبیات مربوط به سازمان بدانیم. دو نفر با
        قصدهای متفاوت نسبت به موضوعی مشترک به یکدیگر مرتبط میشوند، موقعیتی پدید
        می آید که به آن موقعیت مواجهه میگوییم.
      </p>
      <ul className="me-5">
        <li>
          چه راهکارهایی وجود دارد تا یک مواجهه در نهایت شفافیت و همسویی پیش رود
        </li>
        <li className="my-2">زمینه های وقوع موقعیت های مواجهه بررسی می شوند</li>
        <li>
          تاثیر روابط برون سازمانی کارکنان در روابط کاری آنها نشان داده می شود
        </li>
        <li className="my-2">
          و در نهایت توضیح داده خواهد شد که مدیران سازمان چگونه میتوانند روابط
          کارکنان را درک کرده و بر این روابط اثر بگذارند.
        </li>
      </ul>
    </div>
  );
  const otherText = (
    <div>
      <p>
        مسئله آموزش همواره یکی از مهمترین مسائل توسعه انسانی و تعالی سازمانها
        است. آموزش امری است پایان ناپذیر و دستکم تا پایان دوران کاری شخص میتواند
        و باید ادامه داشته باشد چرا که آموزش صحیح و دقیق منجر به افزایش و توسعه
        توانمندیها و کارآمدیهای افراد خواهد شد. به طور کلی میتوان محتوای آموزشی
        را در سازمان به دو دسته تقسیم کرد:
      </p>
      <ul className="me-5">
        <li>آموزشهای فنی و تخصصی با هدف بالا بردن توانمندیهای فنی و تخصصی</li>
        <li className="my-2">
          آموزشهای مدیریتی با هدف افزایش تواناییهای نرم و اصطلاحا Soft Skills
          مدیران و تصمیم گیران سازمانها و همچنین توانمندسازی حداکثری آنها
        </li>
      </ul>
      <p>
        این مجموعه با تجربه چگال و متنوع در حوزه مدیریت و معماری سازمانی
        سازمانهای مختلف صنعتی، تولیدی، و خدماتی در کشور، با همکاری استادان
        برجسته دانشگاههای برتر کشور، و با درک دقیق از مباحث حوزه جامعه شناسی و
        مطالعات سازمان، اقدام به تعریف دورههای آموزشی مختلف و متنوع در قالب
        کارگاههای مشارکتی و کوتاه مدت برای مدیران در راستای توانمندسازی و افزایش
        مهارتهای نرم مدیریتی نموده است.
      </p>
    </div>
  );
  const [TabPageData, setTabPageData] = useState({
    TabPageData: [
      ["home", "تصمیم سازی مدیران", tasminText, "decision"],
      [
        "tahieh",
        "تصویر سازی اطلاعات (Data Visualization)",
        tasvirText,
        "virtual",
      ],
      ["contact", "ارتباطات بین فردی در سازمان", ertebatText, "contract"],
      ["other", "سایر", otherText],
    ],
  });

  //tasmin sazi page
  //main header
  const [TasminsaziMainHeader, setTasminsaziMainHeader] =
    useState("تصمیم سازی مدیران");
  //tasmin sazi first section
  const [TasminsaziFirstSection, setTasminsaziFirstSection] = useState({
    title: "تصمیم‌سازی در سازمان",
    paragraph:
      "مهمترین رکن مدیریت، تصمیم‌گیری است. مشکل بزرگی که اکثر سازمان‌ها با آن مواجه هستند عدم تصمیم‌گیری و یا به تعویق انداختن آن است. تصمیم‌گیری همواره با نتایج و تبعاتی همراه است لیکن مدیر ناگزیر از تصمیم‌گیری است. برای یک مدیر ضروری است که بداند تصمیم‌ها چگونه ساخته می‌شود، در تصمیم گیری چه داده‌هایی مفید و چه داه‌هایی ناکارآمد هستند، یک تصمیم درست چه ویژگی‌هایی دارد و نهایتا زمان و موقعیت در تصمیمات چه نقشی ایفا می‌کند. یک تصمیم اشتباه می‌تواند هزینه‌های مالی و اعتباری زیادی را به همراه داشته باشد، سازمان را به بیراهه برده و موقعیت سازمان و جایگاه مدیر را در معرض تهدید قرار دهد. در این دوره آموزشی، مدیران با موانع پنهانی که در مسیر تصمیم‌گیری وجود دارد آشنا می‌شوند تا بتوانند آن موانع را از میان بردارند. ",
    Image: AcademyTasmimSazi,
  });
  //tasmin sazi second section
  const jadvalAmozeshTasmin = (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col" colSpan="2">
              تصمیم سازی در سازمان (ACA-101)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowSpan="8" style={{ verticalAlign: "middle" }}>
              سرفصل ها
            </th>
            <td>نقش استراتژیک مدیران در سازمان</td>
          </tr>
          <tr>
            <td>چرا تصمیم‌گیری در سازمان حیاتی است؟</td>
          </tr>
          <tr>
            <td>زمان درست تصمیم گیری</td>
          </tr>
          <tr>
            <td>بررسی موانع تصمیم گیری مدیران در زمان مناسب</td>
          </tr>
          <tr>
            <td>روند شکل گیری تصمیمات حیاتی</td>
          </tr>
          <tr>
            <td>تبعات تعلیق تصمیمات</td>
          </tr>
          <tr>
            <td>روند و چگونگی تغیر در تصمیمات</td>
          </tr>
          <tr>
            <td>
              نقش مشاوران، داده‌ها، مستندات، و شناخت دقیق از سازمان در شکل گیری
              تصمیمات{" "}
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="2" style={{ verticalAlign: "middle" }}>
              مخاطبین
            </th>
            <td>مدیران عالی، معاونین، و مدیران ارشد</td>
          </tr>
          <tr>
            <td>مشاوران سازمان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const [TasminsaziSecondSection, setTasminsaziSecondSection] = useState({
    title: "دوره آموزشی",
    paragraph: jadvalAmozeshTasmin,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });

  //Virtual page
  //main header
  const [VirtualMainHeader, setVirtualMainHeader] =
    useState("تصویر سازی اطلاعات");
  //Virtual first section
  const [VirtualFirstSection, setVirtualFirstSection] = useState({
    title: "تصویرسازی اطلاعات با رویکرد تولید گزارش",
    paragraph:
      "اطلاعات مهم ترین نیازمندی یک مدیر برای تصمیم گیری است. هر سازمانی برای هدف گذاری‌های خرد و کلان، ارائه گزارش‌های مالی و مدیریتی در جلسات تصمیم گیری یا حتی برای یک برنامه‌ریزی نیازمند اطلاعات است. اما نحوه استفاده از اطلاعات مسئله مهمی است که در روند تصمیم گیری و اقدامات آتی سازمان تأثیرگذار است. عدم توانایی در استفاده صحیح از اطلاعات، مدیران را دچار چالش می‌نماید. از طرفی درک نادرست از یک گزارش می‌تواند منجر به یک تصمیم اشتباه شود که خسارت‌های جبران ناپذیری را به سازمان تحمیل کند. تصویرسازی اطلاعات باعث می‌شود تا تمام آنچه که در سازمان در جریان است را به شکل کاملا شفاف نمایانده و در نتیجه بتوان بهترین تصمیم ممکن را اتخاذ نمود. در این دوره ارائه اثربخش اطلاعات و تولید گزارش با تصویر سازی کارآمد آموزش داده می‌شود. با تصویرسازی و ارائه موثر اطلاعات، امکان تجزیه و تحلیل قریب به واقع از اقدامات و واقعیت درون سازمان فراهم می‌گردد. در این دوره اصول و مبانی تصویرسازی با رویکرد تولید گزارش آموزش داده می‌شود. ",
    Image: AcademyTasvirSaziEtellat,
  });
  //Virtual second section
  const jadvaltasvirgozaresh = (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col" colSpan="2">
              تصویر سازی اطلاعات (تولید گزارشات) (ACA-201)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowSpan="5" style={{ verticalAlign: "middle" }}>
              سرفصل ها
            </th>
            <td>أنواع نمودار‌ها و تفاوت‌های آن‌ها</td>
          </tr>
          <tr>
            <td>استفاده صحیح و به‌جا از نمودارها</td>
          </tr>
          <tr>
            <td>أصول استفاده از رنگ‌ها برای نمایش اطلاعات</td>
          </tr>
          <tr>
            <td>استراتژی‌های مختلف برای انتخاب و استفاده از داده‌ها</td>
          </tr>
          <tr>
            <td>
              ترکیب داده‌های مختلف با یکدیگر و استفاده از جداول و نمودارهای
              ترکیبی
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="3" style={{ verticalAlign: "middle" }}>
              مخاطبین
            </th>
            <td>مدیران اجرایی و ستادی</td>
          </tr>
          <tr>
            <td>مشاوران سازمان</td>
          </tr>
          <tr>
            <td>کارشناسان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const [VirtualSecondSection, setVirtualSecondSection] = useState({
    title: "دوره آموزشی",
    paragraph: jadvaltasvirgozaresh,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });
  //VirtualTafsir first section
  const [VirtualTafsirFirstSection, setVirtualTafsirFirstSection] = useState({
    title: "تصویرسازی اطلاعات با رویکرد تفسیر گزارش",
    paragraph:
      "تصویرسازی اطلاعات روش موثر و کارآمدی برای ارائه اطلاعات در سازمان است. خوانش و تفسیر درست اطلاعات به اندازه تصویرسازی و فرم نمایش اطلاعات اهمیت دارد. یکی از مهمترین روش‌های انتقال اطلاعات در سازمان گزارش است. بسیاری از گزارشات حاوی اطلاعات جانبی است که ابتدا با هدف جامعیت در ارائه داده‌ها تولید شده است. لیکن همین موضوع منجر به انحراف تمرکز در خوانش گزارش شده و بعضا موضوع اصلی را به حاشیه می‌برد. شناخت اصول خوانش و تفسیر درست اطلاعات، علاوه بر کمک به شناسایی اطلاعات کلیدی و مهم در گزارشات، به تولید موثر اطلاعات نیز کمک می‌نماید. در این دوره انواع نمودارها و مبانی تصویرسازی اطلاعات به منظور خوانش و تفسیر اصولی آنها آموزش داده می‌شود. در این دوره مخاطب فرا می‌گیرد که چگونه فریب داده‌سازی و داده بازی اطلاعات را نخورده و به ضعف‌ها و ایرادهای گزارش پی ببرد.",
    Image: tasvirsazitafsir,
  });
  //VirtualTafsir second section
  const jadvalTafsirgozaresh = (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col" colSpan="2">
              تصویر سازی اطلاعات (تفسیر گزارشات) (ACA-202)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowSpan="8" style={{ verticalAlign: "middle" }}>
              سرفصل ها
            </th>
            <td>أنواع نمودار‌ها و تفاوت‌های آن‌ها</td>
          </tr>
          <tr>
            <td>مبنا و معنای انتخاب نمودارهای مختلف</td>
          </tr>
          <tr>
            <td>أصول استفاده از رنگ‌ها برای نمایش اطلاعات</td>
          </tr>
          <tr>
            <td>مقایسه داده‌های انتخاب شده در گزارشات با سایر داده‌های ممکن</td>
          </tr>
          <tr>
            <td>دلایل انتخاب داده‌های خاص</td>
          </tr>
          <tr>
            <td>تشخیص روش‌داده‌های سازی</td>
          </tr>
          <tr>
            <td>تشخیص فرآیند بازی با داده‌ها</td>
          </tr>
          <tr>
            <td>مواجهه صحیح با نمودارهای فراوان و متنوع </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="3" style={{ verticalAlign: "middle" }}>
              مخاطبین
            </th>
            <td>مدیران عالی، معاونین، و مدیران ارشد</td>
          </tr>
          <tr>
            <td>مدیران اجرایی و ستادی</td>
          </tr>
          <tr>
            <td>مشاوران و ناظران سازمان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const [VirtualTafsirSecondSection, setVirtualTafsirSecondSection] = useState({
    title: "دوره آموزشی",
    paragraph: jadvalTafsirgozaresh,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });
  //ContractPeople page
  //main header
  const [ContractPeopleMainHeader, setContractPeopleMainHeader] = useState(
    "ارتباطات بین فردی در سازمان"
  );
  //ContractPeople Mabani first section
  const [
    ContractPeopleMabaniFirstSection,
    setContractPeopleMabaniFirstSection,
  ] = useState({
    title: "ارتباطات بین فردی در سازمان (مبانی ارتباطات بین فردی)",
    paragraph:
      "یکی از توانمندیهای مهم که یک مدیر شایسته به آن نیاز دارد، مهارت مدیریت روابط بین فردی است. اثربخشی تمام فعالیت‌ها و کیفیت اجرای عملکرد یک مدیر، علاوه بر توانمندی‌ها و تخصص‌های لازمی که هر مدیری باید از آن برخوردار باشد، وابسته به نحوه تعامل او با کارکنان سازمان است. کیفیت و نحوه مواجهه مدیر با افراد، اثری زیربنایی در کیفیت عملکرد کارکنان در سازمان دارد. در آن زمان و موقعیتی که مواجهه دو نیروی درونی قصدمند رخ می‌دهد، هسته و چاشنی کنش‌های فردی در روابط سازمانی شکل می‌گیرد. بسیاری از مشکلات سازمانی و چالش‌هایی که مدیر با آن مواجه است به این علت است که ارتباطات بین فردی عموما مخدوش است. تا زمانی که ناملایمتی‌ها و تعارضات بین فردی را نتوان حل نمود، نمی‌توان انتظار برطرف نمودن مشکلات محیطی و چالش‌های کسب و کاری سازمان را داشت. مسائلی چون ناکارآمدی و بهره‌وری ‌پایین فعالیت‌ها را می‌بایست در ذیل همین مناسبات و روابط بین فردی در سازمان دید. در این دوره با شناخت ماهیت مسئله «مواجهه» و ابعاد پیرامونی آن، به بروندادها و نتایج محیطی آن پرداخته می‌شود و سازوکارهایی که به جهت‌دهی هدفمندانه مناسبات سازمانی می‌انجامد، آموزش داده می‌شود.",
    Image: AcademyErtebatBeinFard,
  });
  //ContractPeople mabani second section
  const jadvalertebatmabani = (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col" colSpan="2">
              ارتباطات بین فردی در سازمان (مبانی ارتباطات بین فردی) (ACA-301)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowSpan="7" style={{ verticalAlign: "middle" }}>
              سرفصل ها
            </th>
            <td>توضیح موقعیت مواجهه</td>
          </tr>
          <tr>
            <td>بررسی زمینه‌های مواجهه</td>
          </tr>
          <tr>
            <td>شفافیت در مواجهات چگونه ارتباطات را بهبود می‌بخشند؟</td>
          </tr>
          <tr>
            <td>راهکارها، سیاست‌ها، و استراتژی‌های شفافیت</td>
          </tr>
          <tr>
            <td>تاثر متقابل روابط برون سازمانی و روابط درون سازمان</td>
          </tr>
          <tr>
            <td>روند شکل گیری کلونی‌های مختلف درون سازمان</td>
          </tr>
          <tr>
            <td>شیوه‌های تاثیر گذاری مدیران بر روابط کارمندان </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="2" style={{ verticalAlign: "middle" }}>
              مخاطبین
            </th>
            <td>مدیران عالی، معاونین، و مدیران ارشد</td>
          </tr>
          <tr>
            <td>مشاوران سازمان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const [
    ContractPeopleMabaniSecondSection,
    setContractPeopleMabaniSecondSection,
  ] = useState({
    title: "دوره آموزشی",
    paragraph: jadvalertebatmabani,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });
  //ContractPeople Tajrobi first section
  const [
    ContractPeopleTajrobiFirstSection,
    setContractPeopleTajrobiFirstSection,
  ] = useState({
    title: "ارتباطات بین فردی در سازمان (بررسی کیس‌های تجربی)",
    paragraph:
      "در این دوره با بررسی نمونه موارد تجربی از موقعیت‌های مواجهه و تاثیر ارتباطات بین فردی با رویکرد موضوعات محوری در دوره مبانی ارتباطات‌ بین‌فردی، به روندی که در تحولات سازمان شکل می‌گیرد پرداخته می‌شود. با شناخت الگوی روابط و تاثیرات آن در سازمان، نقاطی که ظرفیت بحران‌سازی و یا هم‌افزایی در نیروها را دارد شناسایی و شفاف می‌گردد. این امر به شکل گیری بینش لازم برای تشخیص بسترهای مستعد در روابط بین فردی در سازمان برای جهت‌دهی استراتژیک کمک می‌نماید. در این دوره با بررسی کیس‌های تجربی، شاخص و معیاری قابل اعتماد برای سنجش موضوعات کیفی در روابط بین فردی نظیر میزان همدلی کارکنان با سازمان، وفاداری، میزان اعتماد متقابل، حس امنیت و مواردی از این دست برای مخاطب، حاصل می‌گردد.",
    Image: AcademyErtebatBeinFard,
  });
  //ContractPeople Tajrobi second section
  const jadvalertebatTajrobi = (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col" colSpan="2">
              ارتباطات بین فردی در سازمان (بررسی کیس‌های تجربی) (ACA-302){" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{ verticalAlign: "middle" }}>
              سرفصل ها
            </th>
            <td>
              در این دوره تمام موارد مطرح شده در دوره «ارتباطات بین فردی در
              سازمان (مبانی ارتباطات بین فردی)» بر أساس تجربیات مدیران و منطبق
              با فضای سازمان بررسی می‌شوند
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan="2" style={{ verticalAlign: "middle" }}>
              مخاطبین
            </th>
            <td>مدیران عالی، معاونین، و مدیران ارشد</td>
          </tr>
          <tr>
            <td>مشاوران سازمان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const [
    ContractPeopleTajrobiSecondSection,
    setContractPeopleTajrobiSecondSection,
  ] = useState({
    title: "دوره آموزشی",
    paragraph: jadvalertebatTajrobi,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });
  //ContractPeople strategic first section
  const [
    ContractPeopleStrategicFirstSection,
    setContractPeopleStrategicFirstSection,
  ] = useState({
    title: "ارتباطات استراتژیک سازمانی",
    paragraph:
      "استراتژی ارتباطات به مدیران سازمان کمک می‌کند تا روش‌های ایجاد ارزش بیشتر با استفاده از محتوای دارای کیفیت بالا برای افراد و نحوه برقراری ارتباط با آنها را فرا گیرند. در این راستا مهم‌ترین موضوعاتی که این دوره برای رسیدن به نتیجه فوق الذکر به آموزش آن‌ها می‌پردازد به این شرح است: تعیین اهداف سازمان، تعیین اهداف ارتباطی، شناسایی مخاطبان، ساخت وفاداری کارمندان، اعتماد بین کارمندان سازمان، اعتماد مخاطبان سازمان، تعریف جایگاه و پیامدهای کلیدی برای مخاطبان، استراتژی محتوا به عنوان قسمتی از استراتژی ارتباطات، شناخت بیشتر از خود و جامعه در بین کارمندان، توسعه فردی افراد درون سازمان، شناخت بستر جامعه و تاثیرگزاری بیشتر بر آن‌ها، ایجاد انگیزه درون سازمانی و برون سازمانی، پویایی مدیران و کارمندان سازمان، ارتقا شغلی افراد درون سازمان، بینش استراتژیک رهبری سازمان، ارائه بهتر و کلیدی تر خدمات سازمان، مدیریت رشد و تغییر سازمان، آگاهی از برند و ساخت برندینگ سازمانی و ... . ",
    Image: AcademyErtebatBeinFard,
  });
  //ContractPeople Strategic second section
  const jadvalertebatStrategic = (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col" colSpan="2">
              ارتباطات استراتژیک سازمانی (ACA-401){" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowSpan="6" style={{ verticalAlign: "middle" }}>
              سرفصل ها
            </th>
            <td>شناخت بسترهای فرهنگی و شخصیتی کارمندان</td>
          </tr>
          <tr>
            <td>سازمان جهانی: چرا؟ چه وقت؟ کجا؟ چگونه؟ </td>
          </tr>
          <tr>
            <td>کار هوشمندانه: چرا؟ چه وقت؟ کجا؟ چگونه؟</td>
          </tr>
          <tr>
            <td>نقش تکنولوژی در ارتباطات سازمانی</td>
          </tr>
          <tr>
            <td>شناخت بسترهای فرهنگی مخاطبان سازمان</td>
          </tr>
          <tr>
            <td>تاثیر ارتباطات سازمانی بر روی مخاطبان سازمان</td>
          </tr>
          <tr>
            <th scope="row" rowSpan="3" style={{ verticalAlign: "middle" }}>
              مخاطبین
            </th>
            <td>مدیران عالی، معاونین، و مدیران ارشد</td>
          </tr>
          <tr>
            <td>مدیران اجرایی و ستادی</td>
          </tr>
          <tr>
            <td>مشاوران سازمان</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const [
    ContractPeopleStrategicSecondSection,
    setContractPeopleStrategicSecondSection,
  ] = useState({
    title: "دوره آموزشی",
    paragraph: jadvalertebatStrategic,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });
  //Strategic page
  //main header
  const [StrategicMainHeader, setStrategicMainHeader] =
    useState("مشاوره استراتژیک");
  //Strategic first section
  const [StrategicFirstSection, setStrategicFirstSection] = useState({
    title: "لورم ایپسوم",
    paragraph: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا`,
    Image: Strategic,
  });
  //Strategic second section
  const [StrategicSecondSection, setStrategicSecondSection] = useState({
    title: "لورم ایپسوم",
    paragraph: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا`,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });
  //Education page
  //main header
  const [EducationMainHeader, setEducationMainHeader] = useState("آموزش");
  //Education first section
  const para = (
    <div style={{ lineHeight: "2" }}>
      <p>
        مسئله آموزش همواره یکی از مهمترین مسائل توسعه انسانی و تعالی سازمان‌ها
        است. آموزش امری است پایان ناپذیر و دست‌کم تا پایان دوران کاری شخص
        می‌تواند و باید ادامه داشته باشد چرا که آموزش صحیح و دقیق منجر به افزایش
        و توسعه توانمندی‌ها و کار‌آمدی‌های افراد خواهد شد. به طور کلی می‌توان
        محتوای آموزشی را در سازمان به دو دسته تقسیم کرد:
      </p>
      <ul>
        <li className="me-5 mb-2">
          آموزش‌های فنی و تخصصی با هدف بالا بردن توانمندی‌های فنی و تخصصی
        </li>
        <li className="me-5">
          آموزش‌های مدیریتی با هدف افزایش توانایی‌های نرم و اصطلاحا Soft Skills
          مدیران و تصمیم گیران سازمان‌ها و همچنین توانمند‌سازی حداکثری آن‌ها
        </li>
      </ul>
      <p>
        این مجموعه با تجربه چگال و متنوع در حوزه مدیریت و معماری سازمانی
        سازمان‌های مختلف صنعتی، تولیدی، و خدماتی در کشور، با همکاری استادان
        برجسته دانشگاه‌های برتر کشور، و با درک دقیق از مباحث حوزه جامعه شناسی و
        مطالعات سازمان، اقدام به تعریف دوره‌های آموزشی مختلف و متنوع در قالب
        کارگاه‌های مشارکتی و کوتاه مدت برای مدیران در راستای توانمند‌سازی و
        افزایش مهارت‌های نرم مدیریتی نموده است.
      </p>
    </div>
  );
  const [EducationFirstSection, setEducationFirstSection] = useState({
    title: "آموزش",
    paragraph: para,
    Image: Education,
  });
  //Education second section
  const jadvalAmozesh = (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">کد دوره</th>
            <th scope="col">نام دوره</th>
            <th scope="col">پیشنیاز</th>
            <th scope="col">طول دوره (ساعت)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">ACA-101</th>
            <td>تصمیم سازی در سازمان</td>
            <td>-</td>
            <td>8</td>
          </tr>
          <tr>
            <th scope="row">ACA-201</th>
            <td>تصویر سازی اطلاعات (تولید گزارشات)</td>
            <td>-</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">ACA-202</th>
            <td>تصویر سازی اطلاعات (تفسیر گزارشات)</td>
            <td>-</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">ACA-301</th>
            <td>ارتباطات بین فردی در سازمان (مبانی ارتباطات بین فردی)</td>
            <td>-</td>
            <td>16</td>
          </tr>
          <tr>
            <th scope="row">ACA-302</th>
            <td>ارتباطات بین فردی در سازمان (بررسی کیس‌های تجربی)</td>
            <td>ACA-301</td>
            <td>16</td>
          </tr>
          <tr>
            <th scope="row">ACA-401</th>
            <td>ارتباطات استراتژیک سازمانی</td>
            <td>-</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const [EducationSecondSection, setEducationSecondSection] = useState({
    title: "دوره های آموزشی",
    paragraph: jadvalAmozesh,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });
  //AboutUs page
  //main header
  const [AboutUsMainHeader, setAboutUsMainHeader] = useState("درباره ما");
  //AboutUs first section
  const [AboutUsFirstSection, setAboutUsFirstSection] = useState({
    title: "لورم ایپسوم",
    paragraph: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا`,
    Image: Strategic,
  });
  //AboutUs second section
  const [AboutUsSecondSection, setAboutUsSecondSection] = useState({
    title: "لورم ایپسوم",
    paragraph: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا`,
    buttonLable: `برای تهیه این دوره آموزشی و ...`,
  });

  //contact us page
  const [ContactUsPageData, setContactUsPageData] = useState({
    title: "تماس با ما",
    Image: ContactUsPic,
  });

  return (
    <DataContext.Provider
      value={{
        Title,
        FooterTitle,
        CompanyDescription,
        Contact,
        NavbarData,
        CarouselData,
        TabPageData,
        TasminsaziMainHeader,
        TasminsaziFirstSection,
        TasminsaziSecondSection,
        VirtualMainHeader,
        VirtualFirstSection,
        VirtualSecondSection,
        VirtualTafsirFirstSection,
        VirtualTafsirSecondSection,
        ContractPeopleMainHeader,
        ContractPeopleMabaniFirstSection,
        ContractPeopleMabaniSecondSection,
        ContractPeopleTajrobiFirstSection,
        ContractPeopleTajrobiSecondSection,
        ContractPeopleStrategicFirstSection,
        ContractPeopleStrategicSecondSection,
        StrategicMainHeader,
        StrategicFirstSection,
        StrategicSecondSection,
        EducationMainHeader,
        EducationFirstSection,
        EducationSecondSection,
        AboutUsMainHeader,
        AboutUsFirstSection,
        AboutUsSecondSection,
        ContactUsPageData,
        DropDownMenuTitle,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
