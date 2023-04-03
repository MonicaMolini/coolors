{
  function getCurrentScriptAndParentTag() {
    //https://stackoverflow.com/questions/10299846/obtain-a-reference-to-script-parent-element

    const scriptTagList = document.getElementsByTagName("script");
    const scriptTag = scriptTagList[scriptTagList.length - 1];
    const parentTag = scriptTag.parentNode;
    return [scriptTag, parentTag];
  }

  const [scriptTag, parentTag] = getCurrentScriptAndParentTag();
  //<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 980.6 548" style="enable-background:new 0 0 980.6 548;" xml:space="preserve">
  const svg = document.createElement("div");

  svg.classList.add("hero__container__home__right");

  svg.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 980.6 548" style="enable-background:new 0 0 980.6 548;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#FFFFFF;}
                        .st1{display:none;}
                        .st2{display:inline;}
                        .st3{clip-path:url(#SVGID_2_);}
                        .st4{fill:#2C2D43;}
                        .st5{fill:#E86992;}
                        .st6{fill:#F7E734;}
                        .st7{fill:#F7F7F9;}
                        .st8{fill:#41E3B9;}
                        .st9{clip-path:url(#SVGID_4_);}
                        .st10{fill:#6B4B3E;}
                        .st11{fill:#C49F86;}
                        .st12{fill:#FFD6B0;}
                        .st13{fill:#F9F4FB;}
                        .st14{fill:#BDA7E5;}
                        .st15{clip-path:url(#SVGID_6_);}
                        .st16{fill:#0E1821;}
                        .st17{fill:#344966;}
                        .st18{fill:#B4CDEC;}
                        .st19{fill:#EFF4EF;}
                        .st20{fill:#C0CC94;}
                        .st21{clip-path:url(#SVGID_8_);}
                        .st22{fill:#FF4A9E;}
                        .st23{fill:#D165B5;}
                        .st24{fill:#A580CE;}
                        .st25{fill:#779CE7;}
                        .st26{fill:#4BB6FF;}
                        .st27{clip-path:url(#SVGID_10_);}
                        .st28{fill:#485695;}
                        .st29{fill:#E7E7E7;}
                        .st30{fill:#F9C784;}
                        .st31{fill:#FC7B1D;}
                        .st32{fill:#F24C00;}
                        .st33{clip-path:url(#SVGID_12_);}
                        .st34{fill:#E27396;}
                        .st35{fill:#EB9AB4;}
                        .st36{fill:#EFD0E4;}
                        .st37{fill:#EAF4D9;}
                        .st38{fill:#B0DFE2;}
                        .st39{clip-path:url(#SVGID_14_);}
                        .st40{fill:#17697B;}
                        .st41{fill:#4AA0B6;}
                        .st42{fill:#82C1CB;}
                        .st43{fill:#ECE7E4;}
                        .st44{fill:#FFA62B;}
                        .st45{clip-path:url(#SVGID_16_);}
                        .st46{fill:#5BA8E6;}
                        .st47{fill:#80C8F9;}
                        .st48{fill:#F9F9F9;}
                        .st49{fill:#FFE55D;}
                        .st50{fill:#FF6392;}
                        .st51{clip-path:url(#SVGID_18_);}
                        .st52{fill:#D63F44;}
                        .st53{fill:#E9FFFA;}
                        .st54{fill:#9ED9DA;}
                        .st55{fill:#477699;}
                        .st56{fill:#1C3353;}
                        .st57{clip-path:url(#SVGID_20_);}
                        .st58{fill:#555863;}
                        .st59{fill:#00E8FC;}
                        .st60{fill:#F96E47;}
                        .st61{fill:#FAC848;}
                        .st62{fill:#FFE3E2;}
                        .st63{clip-path:url(#SVGID_22_);}
                        .st64{fill:#10263A;}
                        .st65{fill:#09BCC0;}
                        .st66{fill:#C5D9D2;}
                        .st67{fill:#F5EDEB;}
                        .st68{fill:#F3D1AF;}
                        .st69{clip-path:url(#SVGID_24_);}
                        .st70{fill:#091E05;}
                        .st71{fill:#00512D;}
                        .st72{fill:#D87CAB;}
                        .st73{fill:#F9B9C3;}
                        .st74{fill:#FEDA22;}
                        .st75{clip-path:url(#SVGID_26_);}
                        .st76{fill:#47403A;}
                        .st77{fill:#8A817C;}
                        .st78{fill:#BCB7B1;}
                        .st79{fill:#F4F3EF;}
                        .st80{fill:#E0AFA1;}
                        .st81{clip-path:url(#SVGID_28_);}
                        .st82{fill:#21587B;}
                        .st83{fill:#37A3A5;}
                        .st84{fill:#57CC98;}
                        .st85{fill:#80EB9A;}
                        .st86{fill:#C6FACC;}
                        .st87{clip-path:url(#SVGID_30_);}
                        .st88{fill:#F49098;}
                        .st89{fill:#DFB2F3;}
                        .st90{fill:#F5E960;}
                        .st91{fill:#F2F4FF;}
                        .st92{fill:#55D6C2;}
                        .st93{clip-path:url(#SVGID_32_);}
                        .st94{fill:#CDC393;}
                        .st95{fill:#E8E6DA;}
                        .st96{fill:#9FB7E5;}
                        .st97{fill:#648DE5;}
                        .st98{fill:#304E89;}
                        .st99{clip-path:url(#SVGID_34_);}
                        .st100{fill:#0A0904;}
                        .st101{fill:#FE0000;}
                        .st102{fill:#FF8203;}
                        .st103{fill:#FFC102;}
                        .st104{fill:#FEEBAD;}
                        .st105{clip-path:url(#SVGID_36_);}
                        .st106{fill:#FBB001;}
                        .st107{fill:#FFD539;}
                        .st108{fill:#FFA3AE;}
                        .st109{fill:#017BBE;}
                        .st110{fill:#00AE55;}
                        .st111{clip-path:url(#SVGID_38_);}
                        .st112{fill:#7E6C6C;}
                        .st113{fill:#F97476;}
                        .st114{fill:#FFA9A2;}
                        .st115{fill:#B8E6FF;}
                        .st116{fill:#6390FF;}
                        .st117{clip-path:url(#SVGID_40_);}
                        .st118{fill:#07004D;}
                        .st119{fill:#2F81BD;}
                        .st120{fill:#41E2B8;}
                        .st121{fill:#F4DEBF;}
                        .st122{fill:#EA8B90;}
                        .st123{clip-path:url(#SVGID_42_);}
                        .st124{fill:#1D2F6F;}
                        .st125{fill:#7F91FE;}
                        .st126{fill:#FAC748;}
                        .st127{fill:#F9E9EC;}
                        .st128{fill:#F98EAD;}
                        .st129{clip-path:url(#SVGID_44_);}
                        .st130{fill:#00926E;}
                        .st131{fill:#FFEDE6;}
                        .st132{fill:#FFCF00;}
                        .st133{fill:#EF6222;}
                        .st134{fill:#FC003E;}
                        .st135{clip-path:url(#SVGID_46_);}
                        .st136{fill:#642CA9;}
                        .st137{fill:#FF34AC;}
                        .st138{fill:#FF74D5;}
                        .st139{fill:#FFB9DF;}
                        .st140{fill:#FFDFE0;}
                        .st141{clip-path:url(#SVGID_48_);}
                        .st142{fill:#2C6F4B;}
                        .st143{fill:#4C9768;}
                        .st144{fill:#FEFEE4;}
                        .st145{fill:#FECAB9;}
                        .st146{fill:#DC8945;}
                        .st147{clip-path:url(#SVGID_50_);}
                        .st148{fill:#030788;}
                        .st149{fill:#2F4392;}
                        .st150{fill:#647AA3;}
                        .st151{fill:#95B2B0;}
                        .st152{fill:#C6EDBE;}
                        .st153{clip-path:url(#SVGID_52_);}
                        .st154{fill:#BEF5DD;}
                        .st155{fill:#CCE5D8;}
                        .st156{fill:#DED7D2;}
                        .st157{fill:#EEC6CA;}
                        .st158{fill:#FFB7C4;}
                        .st159{clip-path:url(#SVGID_54_);}
                        .st160{fill:#655B7C;}
                        .st161{fill:#A994BD;}
                        .st162{fill:#AFC1D7;}
                        .st163{fill:#CEF9F2;}
                        .st164{fill:#D8CA96;}
                        .st165{clip-path:url(#SVGID_56_);}
                        .st166{fill:#656E79;}
                        .st167{fill:#8D98A8;}
                        .st168{fill:#DCCCBC;}
                        .st169{fill:#EBB464;}
                        .st170{fill:#A77647;}
                        .st171{clip-path:url(#SVGID_58_);}
                        .st172{fill:#F18180;}
                        .st173{fill:#F4978F;}
                        .st174{fill:#FAAD9D;}
                        .st175{fill:#FCC5AB;}
                        .st176{fill:#FEDABB;}
                        .st177{clip-path:url(#SVGID_60_);}
                        .st178{fill:#4059AD;}
                        .st179{fill:#6C9AC4;}
                        .st180{fill:#97D9C4;}
                        .st181{fill:#F0F2F1;}
                        .st182{fill:#F9B743;}
                        .st183{clip-path:url(#SVGID_62_);}
                        .st184{fill:#9B5DE6;}
                        .st185{fill:#F15BB4;}
                        .st186{fill:#FDE442;}
                        .st187{fill:#01BBFA;}
                        .st188{fill:#01F5D4;}
                        .st189{clip-path:url(#SVGID_64_);}
                        .st190{fill:#FF7577;}
                        .st191{fill:#E69597;}
                        .st192{fill:#CFB5B8;}
                        .st193{fill:#B6D5D7;}
                        .st194{fill:#9CF7F6;}
                        .st195{clip-path:url(#SVGID_66_);}
                        .st196{fill:#AE4D9A;}
                        .st197{fill:#D76BA0;}
                        .st198{fill:#E5A9A9;}
                        .st199{fill:#F4E4B9;}
                        .st200{fill:#9CF7E5;}
                        .st201{clip-path:url(#SVGID_68_);}
                        .st202{fill:#9481FF;}
                        .st203{fill:#B8B8FF;}
                        .st204{fill:#F8F7FF;}
                        .st205{fill:#FFEEDE;}
                        .st206{fill:#FFD8BE;}
                        .st207{clip-path:url(#SVGID_70_);}
                        .st208{fill:#231F20;}
                        .st209{fill:#BB4430;}
                        .st210{fill:#7EBDC2;}
                        .st211{fill:#F3DFA2;}
                        .st212{fill:#EFE6DD;}
                        .st213{clip-path:url(#SVGID_72_);}
                        .st214{fill:#FF6AEC;}
                        .st215{fill:#FF86C9;}
                        .st216{fill:#FFA3A4;}
                        .st217{fill:#FFBF82;}
                        .st218{fill:#FFDC5E;}
                        .st219{clip-path:url(#SVGID_74_);}
                        .st220{fill:#A8D5E2;}
                        .st221{fill:#F9A720;}
                        .st222{fill:#FFD449;}
                        .st223{fill:#568C30;}
                        .st224{fill:#0F4A12;}
                        .st225{clip-path:url(#SVGID_76_);}
                        .st226{fill:#070707;}
                        .st227{fill:#3772FF;}
                        .st228{fill:#DF2935;}
                        .st229{fill:#FECA40;}
                        .st230{fill:#E6E8E5;}
                        .st231{clip-path:url(#SVGID_78_);}
                        .st232{fill:#F3F330;}
                        .st233{fill:#C2F263;}
                        .st234{fill:#91F291;}
                        .st235{fill:#61F2C1;}
                        .st236{fill:#30F2F2;}
                        .st237{clip-path:url(#SVGID_80_);}
                        .st238{fill:#EF6551;}
                        .st239{fill:#F38375;}
                        .st240{fill:#F8A399;}
                        .st241{fill:#FCC3BC;}
                        .st242{fill:#FFE3E0;}
                        .st243{clip-path:url(#SVGID_82_);}
                        .st244{fill:#7D690A;}
                        .st245{fill:#BABD8E;}
                        .st246{fill:#FFDAC8;}
                        .st247{fill:#FA9500;}
                        .st248{fill:#EA6426;}
                        .st249{clip-path:url(#SVGID_84_);}
                        .st250{fill:#072AC9;}
                        .st251{fill:#1E97FE;}
                        .st252{fill:#A1D6F8;}
                        .st253{fill:#FCF400;}
                        .st254{fill:#FFC404;}
                        .st255{clip-path:url(#SVGID_86_);}
                        .st256{fill:#816AEC;}
                        .st257{fill:#CB77FF;}
                        .st258{fill:#FFB8FF;}
                        .st259{fill:#3BF3FC;}
                        .st260{fill:#C9FF89;}
                        .st261{clip-path:url(#SVGID_88_);}
                        .st262{fill:#042A9F;}
                        .st263{fill:#5C4AE5;}
                        .st264{fill:#947CD4;}
                        .st265{fill:#F0A7A0;}
                        .st266{fill:#F26BAC;}
                        .st267{clip-path:url(#SVGID_90_);}
                        .st268{fill:#FFBF86;}
                        .st269{fill:#FFE152;}
                        .st270{fill:#FFEACF;}
                        .st271{fill:#FFB5C3;}
                        .st272{fill:#3875FF;}
                        .st273{clip-path:url(#SVGID_92_);}
                        .st274{clip-path:url(#SVGID_94_);}
                        .st275{clip-path:url(#SVGID_96_);}
                        .st276{clip-path:url(#SVGID_98_);}
                        .st277{clip-path:url(#SVGID_100_);}
                        .st278{clip-path:url(#SVGID_102_);}
                        .st279{clip-path:url(#SVGID_104_);}
                        .st280{clip-path:url(#SVGID_106_);}
                        .st281{clip-path:url(#SVGID_108_);}
                        .st282{clip-path:url(#SVGID_110_);}
                        .st283{clip-path:url(#SVGID_112_);}
                        .st284{clip-path:url(#SVGID_114_);}
                        .st285{clip-path:url(#SVGID_116_);}
                        .st286{clip-path:url(#SVGID_118_);}
                        .st287{clip-path:url(#SVGID_120_);}
                        .st288{clip-path:url(#SVGID_122_);}
                        .st289{clip-path:url(#SVGID_124_);}
                        .st290{clip-path:url(#SVGID_126_);}
                        .st291{clip-path:url(#SVGID_128_);}
                        .st292{clip-path:url(#SVGID_130_);}
                        .st293{clip-path:url(#SVGID_132_);}
                        .st294{clip-path:url(#SVGID_134_);}
                        .st295{clip-path:url(#SVGID_136_);}
                        .st296{clip-path:url(#SVGID_138_);}
                        .st297{clip-path:url(#SVGID_140_);}
                        .st298{clip-path:url(#SVGID_142_);}
                        .st299{clip-path:url(#SVGID_144_);}
                        .st300{clip-path:url(#SVGID_146_);}
                        .st301{clip-path:url(#SVGID_148_);}
                        .st302{clip-path:url(#SVGID_150_);}
                        .st303{clip-path:url(#SVGID_152_);}
                        .st304{clip-path:url(#SVGID_154_);}
                        .st305{clip-path:url(#SVGID_156_);}
                        .st306{clip-path:url(#SVGID_158_);}
                        .st307{clip-path:url(#SVGID_160_);}
                        .st308{clip-path:url(#SVGID_162_);}
                        .st309{clip-path:url(#SVGID_164_);}
                        .st310{clip-path:url(#SVGID_166_);}
                        .st311{clip-path:url(#SVGID_168_);}
                        .st312{clip-path:url(#SVGID_170_);}
                        .st313{clip-path:url(#SVGID_172_);}
                        .st314{clip-path:url(#SVGID_174_);}
                        .st315{clip-path:url(#SVGID_176_);}
                        .st316{clip-path:url(#SVGID_178_);}
                        .st317{clip-path:url(#SVGID_180_);}
                        .st318{display:none;fill:#FFFFFF;}
                        .st319{enable-background:new    ;}
                        .st320{fill:#000;}
                        .st321{fill:none;stroke:#000;stroke-miterlimit:10;}
                        .st322{fill:#E1E1E5;}
                        .st323{fill:#C9C8CC;}
                        .st324{fill:transparent;}
                        .st325{fill:#9B5DE5;}
                        .st326{fill:#F15BB5;}
                        .st327{fill:#FEE440;}
                        .st328{fill:#00BBF9;}
                        .st329{fill:#00F5D4;}
                        .st330{fill:#02D1AC;}
                    </style>
                    <image style="overflow:visible;" y="10" width="2617" height="3344" id="homepage_hero-palettes" xlink:href="./assets/homepage_hero_palettes.png" transform="matrix(0.2453 0 0 0.2453 308.152 30.2241)">
                    </image>
                    <path class="st0" d="M0,0v759h980.6V0H0z M956.6,461.5h-655v-450h655V461.5z"></path>
                    <g class="st1">
                    <g class="st2">
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_1_" d="M426.2,64.9H319.9c-2.5,0-4.6-2.1-4.6-4.6V41.1c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C430.7,62.9,428.7,64.9,426.2,64.9z"></path>
                    </defs>
                    <clipPath id="SVGID_2_">
                     <use xlink:href="#SVGID_1_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st3">
                    <rect x="315.3" y="36.5" class="st4" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="36.5" class="st5" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="36.5" class="st6" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="36.5" class="st7" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="36.5" class="st8" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_3_" d="M554.2,64.9H447.9c-2.5,0-4.6-2.1-4.6-4.6V41.1c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C558.8,62.9,556.7,64.9,554.2,64.9z"></path>
                    </defs>
                    <clipPath id="SVGID_4_">
                    <use xlink:href="#SVGID_3_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st9">
                    <rect x="443.3" y="36.5" class="st10" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="36.5" class="st11" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="36.5" class="st12" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="36.5" class="st13" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="36.5" class="st14" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_5_" d="M682.2,64.9H576c-2.5,0-4.6-2.1-4.6-4.6V41.1c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C686.8,62.9,684.8,64.9,682.2,64.9z"></path>
                    </defs>
                    <clipPath id="SVGID_6_">
                    <use xlink:href="#SVGID_5_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st15">
                    <rect x="571.4" y="36.5" class="st16" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="36.5" class="st17" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="36.5" class="st18" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="36.5" class="st19" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="36.5" class="st20" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_7_" d="M810.3,64.9H704c-2.5,0-4.6-2.1-4.6-4.6V41.1c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C814.9,62.9,812.8,64.9,810.3,64.9z"></path>
                    </defs>
                    <clipPath id="SVGID_8_">
                    <use xlink:href="#SVGID_7_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st21">
                    <rect x="699.4" y="36.5" class="st22" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="36.5" class="st23" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="36.5" class="st24" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="36.5" class="st25" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="36.5" class="st26" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_9_" d="M938.3,64.9H832c-2.5,0-4.6-2.1-4.6-4.6V41.1c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C942.9,62.9,940.9,64.9,938.3,64.9z"></path>
                    </defs>
                    <clipPath id="SVGID_10_">
                    <use xlink:href="#SVGID_9_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st27">
                    <rect x="827.5" y="36.5" class="st28" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="36.5" class="st29" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="36.5" class="st30" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="36.5" class="st31" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="36.5" class="st32" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                     <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_11_" d="M426.2,105.3H319.9c-2.5,0-4.6-2.1-4.6-4.6V81.5c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,103.2,428.7,105.3,426.2,105.3z"></path>
                    </defs>
                    <clipPath id="SVGID_12_">
                    <use xlink:href="#SVGID_11_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st33">
                    <rect x="315.3" y="76.9" class="st34" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="76.9" class="st35" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="76.9" class="st36" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="76.9" class="st37" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="76.9" class="st38" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_13_" d="M554.2,105.3H447.9c-2.5,0-4.6-2.1-4.6-4.6V81.5c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,103.2,556.7,105.3,554.2,105.3z"></path>
                    </defs>
                    <clipPath id="SVGID_14_">
                    <use xlink:href="#SVGID_13_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st39">
                    <rect x="443.3" y="76.9" class="st40" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="76.9" class="st41" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="76.9" class="st42" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="76.9" class="st43" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="76.9" class="st44" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_15_" d="M682.2,105.3H576c-2.5,0-4.6-2.1-4.6-4.6V81.5c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C686.8,103.2,684.8,105.3,682.2,105.3z"></path>
                    </defs>
                    <clipPath id="SVGID_16_">
                    <use xlink:href="#SVGID_15_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st45">
                    <rect x="571.4" y="76.9" class="st46" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="76.9" class="st47" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="76.9" class="st48" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="76.9" class="st49" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="76.9" class="st50" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_17_" d="M810.3,105.3H704c-2.5,0-4.6-2.1-4.6-4.6V81.5c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C814.9,103.2,812.8,105.3,810.3,105.3z"></path>
                    </defs>
                    <clipPath id="SVGID_18_">
                    <use xlink:href="#SVGID_17_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st51">
                    <rect x="699.4" y="76.9" class="st52" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="76.9" class="st53" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="76.9" class="st54" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="76.9" class="st55" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="76.9" class="st56" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_19_" d="M938.3,105.3H832c-2.5,0-4.6-2.1-4.6-4.6V81.5c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C942.9,103.2,940.9,105.3,938.3,105.3z"></path>
                    </defs>
                    <clipPath id="SVGID_20_">
                    <use xlink:href="#SVGID_19_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st57">
                    <rect x="827.5" y="76.9" class="st58" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="76.9" class="st59" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="76.9" class="st60" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="76.9" class="st61" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="76.9" class="st62" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_21_" d="M426.2,145.7H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,143.6,428.7,145.7,426.2,145.7z"></path>
                    </defs>
                    <clipPath id="SVGID_22_">
                    <use xlink:href="#SVGID_21_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st63">
                    <rect x="315.3" y="117.3" class="st64" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="117.3" class="st65" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="117.3" class="st66" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="117.3" class="st67" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="117.3" class="st68" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_23_" d="M554.2,145.7H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,143.6,556.7,145.7,554.2,145.7z"></path>
                    </defs>
                    <clipPath id="SVGID_24_">
                    <use xlink:href="#SVGID_23_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st69">
                    <rect x="443.3" y="117.3" class="st70" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="117.3" class="st71" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="117.3" class="st72" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="117.3" class="st73" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="117.3" class="st74" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_25_" d="M682.2,145.7H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,143.6,684.8,145.7,682.2,145.7z"></path>
                    </defs>
                    <clipPath id="SVGID_26_">
                    <use xlink:href="#SVGID_25_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st75">
                    <rect x="571.4" y="117.3" class="st76" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="117.3" class="st77" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="117.3" class="st78" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="117.3" class="st79" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="117.3" class="st80" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_27_" d="M810.3,145.7H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,143.6,812.8,145.7,810.3,145.7z"></path>
                    </defs>
                    <clipPath id="SVGID_28_">
                    <use xlink:href="#SVGID_27_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st81">
                    <rect x="699.4" y="117.3" class="st82" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="117.3" class="st83" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="117.3" class="st84" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="117.3" class="st85" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="117.3" class="st86" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_29_" d="M938.3,145.7H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,143.6,940.9,145.7,938.3,145.7z"></path>
                    </defs>
                    <clipPath id="SVGID_30_">
                    <use xlink:href="#SVGID_29_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st87">
                    <rect x="827.5" y="117.3" class="st88" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="117.3" class="st89" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="117.3" class="st90" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="117.3" class="st91" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="117.3" class="st92" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_31_" d="M426.2,186H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,184,428.7,186,426.2,186z"></path>
                    </defs>
                    <clipPath id="SVGID_32_">
                    <use xlink:href="#SVGID_31_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st93">
                    <rect x="315.3" y="157.7" class="st94" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="157.7" class="st95" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="157.7" class="st96" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="157.7" class="st97" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="157.7" class="st98" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_33_" d="M554.2,186H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,184,556.7,186,554.2,186z"></path>
                    </defs>
                    <clipPath id="SVGID_34_">
                    <use xlink:href="#SVGID_33_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st99">
                    <rect x="443.3" y="157.7" class="st100" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="157.7" class="st101" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="157.7" class="st102" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="157.7" class="st103" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="157.7" class="st104" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_35_" d="M682.2,186H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C686.8,184,684.8,186,682.2,186z"></path>
                    </defs>
                    <clipPath id="SVGID_36_">
                    <use xlink:href="#SVGID_35_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st105">
                    <rect x="571.4" y="157.7" class="st106" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="157.7" class="st107" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="157.7" class="st108" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="157.7" class="st109" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="157.7" class="st110" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_37_" d="M810.3,186H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C814.9,184,812.8,186,810.3,186z"></path>
                    </defs>
                    <clipPath id="SVGID_38_">
                    <use xlink:href="#SVGID_37_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st111">
                    <rect x="699.4" y="157.7" class="st112" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="157.7" class="st113" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="157.7" class="st114" width="25.4" height="28.4"></rect>
                     <rect x="768.7" y="157.7" class="st115" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="157.7" class="st116" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_39_" d="M938.3,186H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C942.9,184,940.9,186,938.3,186z"></path>
                    </defs>
                    <clipPath id="SVGID_40_">
                    <use xlink:href="#SVGID_39_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st117">
                    <rect x="827.5" y="157.7" class="st118" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="157.7" class="st119" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="157.7" class="st120" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="157.7" class="st121" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="157.7" class="st122" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_41_" d="M426.2,226.4H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,224.3,428.7,226.4,426.2,226.4z"></path>
                    </defs>
                    <clipPath id="SVGID_42_">
                    <use xlink:href="#SVGID_41_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st123">
                    <rect x="315.3" y="198" class="st124" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="198" class="st125" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="198" class="st126" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="198" class="st127" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="198" class="st128" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_43_" d="M554.2,226.4H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,224.3,556.7,226.4,554.2,226.4z"></path>
                    </defs>
                    <clipPath id="SVGID_44_">
                    <use xlink:href="#SVGID_43_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st129">
                    <rect x="443.3" y="198" class="st130" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="198" class="st131" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="198" class="st132" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="198" class="st133" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="198" class="st134" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_45_" d="M682.2,226.4H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,224.3,684.8,226.4,682.2,226.4z"></path>
                    </defs>
                    <clipPath id="SVGID_46_">
                    <use xlink:href="#SVGID_45_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st135">
                    <rect x="571.4" y="198" class="st136" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="198" class="st137" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="198" class="st138" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="198" class="st139" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="198" class="st140" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_47_" d="M810.3,226.4H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,224.3,812.8,226.4,810.3,226.4z"></path>
                    </defs>
                    <clipPath id="SVGID_48_">
                    <use xlink:href="#SVGID_47_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st141">
                    <rect x="699.4" y="198" class="st142" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="198" class="st143" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="198" class="st144" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="198" class="st145" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="198" class="st146" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_49_" d="M938.3,226.4H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,224.3,940.9,226.4,938.3,226.4z"></path>
                    </defs>
                    <clipPath id="SVGID_50_">
                    <use xlink:href="#SVGID_49_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st147">
                    <rect x="827.5" y="198" class="st148" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="198" class="st149" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="198" class="st150" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="198" class="st151" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="198" class="st152" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_51_" d="M426.2,266.8H319.9c-2.5,0-4.6-2.1-4.6-4.6V243c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,264.7,428.7,266.8,426.2,266.8z"></path>
                    </defs>
                    <clipPath id="SVGID_52_">
                    <use xlink:href="#SVGID_51_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st153">
                    <rect x="315.3" y="238.4" class="st154" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="238.4" class="st155" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="238.4" class="st156" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="238.4" class="st157" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="238.4" class="st158" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_53_" d="M554.2,266.8H447.9c-2.5,0-4.6-2.1-4.6-4.6V243c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,264.7,556.7,266.8,554.2,266.8z"></path>
                    </defs>
                    <clipPath id="SVGID_54_">
                    <use xlink:href="#SVGID_53_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st159">
                    <rect x="443.3" y="238.4" class="st160" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="238.4" class="st161" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="238.4" class="st162" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="238.4" class="st163" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="238.4" class="st164" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_55_" d="M682.2,266.8H576c-2.5,0-4.6-2.1-4.6-4.6V243c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C686.8,264.7,684.8,266.8,682.2,266.8z"></path>
                    </defs>
                    <clipPath id="SVGID_56_">
                    <use xlink:href="#SVGID_55_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st165">
                    <rect x="571.4" y="238.4" class="st166" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="238.4" class="st167" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="238.4" class="st168" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="238.4" class="st169" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="238.4" class="st170" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_57_" d="M810.3,266.8H704c-2.5,0-4.6-2.1-4.6-4.6V243c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C814.9,264.7,812.8,266.8,810.3,266.8z"></path>
                    </defs>
                    <clipPath id="SVGID_58_">
                    <use xlink:href="#SVGID_57_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st171">
                    <rect x="699.4" y="238.4" class="st172" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="238.4" class="st173" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="238.4" class="st174" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="238.4" class="st175" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="238.4" class="st176" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_59_" d="M938.3,266.8H832c-2.5,0-4.6-2.1-4.6-4.6V243c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C942.9,264.7,940.9,266.8,938.3,266.8z"></path>
                    </defs>
                    <clipPath id="SVGID_60_">
                    <use xlink:href="#SVGID_59_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st177">
                    <rect x="827.5" y="238.4" class="st178" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="238.4" class="st179" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="238.4" class="st180" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="238.4" class="st181" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="238.4" class="st182" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_61_" d="M426.2,307.1H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,305.1,428.7,307.1,426.2,307.1z"></path>
                    </defs>
                    <clipPath id="SVGID_62_">
                    <use xlink:href="#SVGID_61_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st183">
                    <rect x="315.3" y="278.8" class="st184" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="278.8" class="st185" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="278.8" class="st186" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="278.8" class="st187" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="278.8" class="st188" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_63_" d="M554.2,307.1H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,305.1,556.7,307.1,554.2,307.1z"></path>
                    </defs>
                    <clipPath id="SVGID_64_">
                    <use xlink:href="#SVGID_63_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st189">
                    <rect x="443.3" y="278.8" class="st190" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="278.8" class="st191" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="278.8" class="st192" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="278.8" class="st193" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="278.8" class="st194" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_65_" d="M682.2,307.1H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,305.1,684.8,307.1,682.2,307.1z"></path>
                    </defs>
                    <clipPath id="SVGID_66_">
                    <use xlink:href="#SVGID_65_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st195">
                    <rect x="571.4" y="278.8" class="st196" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="278.8" class="st197" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="278.8" class="st198" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="278.8" class="st199" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="278.8" class="st200" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_67_" d="M810.3,307.1H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,305.1,812.8,307.1,810.3,307.1z"></path>
                    </defs>
                    <clipPath id="SVGID_68_">
                    <use xlink:href="#SVGID_67_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st201">
                    <rect x="699.4" y="278.8" class="st202" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="278.8" class="st203" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="278.8" class="st204" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="278.8" class="st205" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="278.8" class="st206" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_69_" d="M938.3,307.1H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,305.1,940.9,307.1,938.3,307.1z"></path>
                    </defs>
                    <clipPath id="SVGID_70_">
                    <use xlink:href="#SVGID_69_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st207">
                    <rect x="827.5" y="278.8" class="st208" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="278.8" class="st209" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="278.8" class="st210" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="278.8" class="st211" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="278.8" class="st212" width="23.1" height="28.4"></rect>
                    </g>
                    </g>Timeout
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_71_" d="M426.2,347.5H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,345.5,428.7,347.5,426.2,347.5z"></path>
                    </defs>
                    <clipPath id="SVGID_72_">
                    <use xlink:href="#SVGID_71_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st213">
                    <rect x="315.3" y="319.1" class="st214" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="319.1" class="st215" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="319.1" class="st216" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="319.1" class="st217" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="319.1" class="st218" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_73_" d="M554.2,347.5H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,345.5,556.7,347.5,554.2,347.5z"></path>
                    </defs>
                    <clipPath id="SVGID_74_">
                    <use xlink:href="#SVGID_73_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st219">
                    <rect x="443.3" y="319.1" class="st220" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="319.1" class="st221" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="319.1" class="st222" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="319.1" class="st223" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="319.1" class="st224" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_75_" d="M682.2,347.5H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,345.5,684.8,347.5,682.2,347.5z"></path>
                    </defs>
                    <clipPath id="SVGID_76_">
                    <use xlink:href="#SVGID_75_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st225">
                    <rect x="571.4" y="319.1" class="st226" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="319.1" class="st227" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="319.1" class="st228" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="319.1" class="st229" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="319.1" class="st230" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_77_" d="M810.3,347.5H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,345.5,812.8,347.5,810.3,347.5z"></path>
                    </defs>
                    <clipPath id="SVGID_78_">
                    <use xlink:href="#SVGID_77_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st231">
                    <rect x="699.4" y="319.1" class="st232" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="319.1" class="st233" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="319.1" class="st234" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="319.1" class="st235" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="319.1" class="st236" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_79_" d="M938.3,347.5H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,345.5,940.9,347.5,938.3,347.5z"></path>
                    </defs>
                    <clipPath id="SVGID_80_">
                    <use xlink:href="#SVGID_79_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st237">
                    <rect x="827.5" y="319.1" class="st238" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="319.1" class="st239" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="319.1" class="st240" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="319.1" class="st241" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="319.1" class="st242" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_81_" d="M426.2,387.9H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,385.8,428.7,387.9,426.2,387.9z"></path>
                    </defs>
                    <clipPath id="SVGID_82_">
                    <use xlink:href="#SVGID_81_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st243">
                    <rect x="315.3" y="359.5" class="st244" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="359.5" class="st245" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="359.5" class="st246" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="359.5" class="st247" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="359.5" class="st248" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_83_" d="M554.2,387.9H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,385.8,556.7,387.9,554.2,387.9z"></path>
                    </defs>
                    <clipPath id="SVGID_84_">
                    <use xlink:href="#SVGID_83_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st249">
                     <rect x="443.3" y="359.5" class="st250" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="359.5" class="st251" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="359.5" class="st252" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="359.5" class="st253" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="359.5" class="st254" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_85_" d="M682.2,387.9H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,385.8,684.8,387.9,682.2,387.9z"></path>
                    </defs>
                    <clipPath id="SVGID_86_">
                    <use xlink:href="#SVGID_85_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st255">
                    <rect x="571.4" y="359.5" class="st256" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="359.5" class="st257" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="359.5" class="st258" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="359.5" class="st259" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="359.5" class="st260" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_87_" d="M810.3,387.9H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,385.8,812.8,387.9,810.3,387.9z"></path>
                    </defs>
                    <clipPath id="SVGID_88_">
                    <use xlink:href="#SVGID_87_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st261">
                    <rect x="699.4" y="359.5" class="st262" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="359.5" class="st263" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="359.5" class="st264" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="359.5" class="st265" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="359.5" class="st266" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_89_" d="M938.3,387.9H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,385.8,940.9,387.9,938.3,387.9z"></path>
                    </defs>
                    <clipPath id="SVGID_90_">
                    <use xlink:href="#SVGID_89_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st267">
                    <rect x="827.5" y="359.5" class="st268" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="359.5" class="st269" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="359.5" class="st270" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="359.5" class="st271" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="359.5" class="st272" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g class="st2">
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_91_" d="M426.2,428.3H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,426.2,428.7,428.3,426.2,428.3z"></path>
                    </defs>
                    <clipPath id="SVGID_92_">
                    <use xlink:href="#SVGID_91_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st273">
                    <rect x="315.3" y="399.9" class="st4" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="399.9" class="st5" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="399.9" class="st6" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="399.9" class="st7" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="399.9" class="st8" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_93_" d="M554.2,428.3H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,426.2,556.7,428.3,554.2,428.3z"></path>
                    </defs>
                    <clipPath id="SVGID_94_">
                    <use xlink:href="#SVGID_93_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st274">
                    <rect x="443.3" y="399.9" class="st10" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="399.9" class="st11" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="399.9" class="st12" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="399.9" class="st13" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="399.9" class="st14" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_95_" d="M682.2,428.3H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,426.2,684.8,428.3,682.2,428.3z"></path>
                    </defs>
                    <clipPath id="SVGID_96_">
                    <use xlink:href="#SVGID_95_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st275">
                    <rect x="571.4" y="399.9" class="st16" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="399.9" class="st17" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="399.9" class="st18" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="399.9" class="st19" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="399.9" class="st20" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_97_" d="M810.3,428.3H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,426.2,812.8,428.3,810.3,428.3z"></path>
                    </defs>
                    <clipPath id="SVGID_98_">
                    <use xlink:href="#SVGID_97_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st276">
                    <rect x="699.4" y="399.9" class="st22" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="399.9" class="st23" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="399.9" class="st24" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="399.9" class="st25" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="399.9" class="st26" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_99_" d="M938.3,428.3H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,426.2,940.9,428.3,938.3,428.3z"></path>
                    </defs>
                    <clipPath id="SVGID_100_">
                    <use xlink:href="#SVGID_99_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st277">
                    <rect x="827.5" y="399.9" class="st28" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="399.9" class="st29" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="399.9" class="st30" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="399.9" class="st31" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="399.9" class="st32" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_101_" d="M426.2,468.6H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6V464C430.7,466.6,428.7,468.6,426.2,468.6z"></path>
                    </defs>
                    <clipPath id="SVGID_102_">
                    <use xlink:href="#SVGID_101_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st278">
                    <rect x="315.3" y="440.3" class="st34" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="440.3" class="st35" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="440.3" class="st36" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="440.3" class="st37" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="440.3" class="st38" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_103_" d="M554.2,468.6H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6V464C558.8,466.6,556.7,468.6,554.2,468.6z"></path>
                    </defs>
                    <clipPath id="SVGID_104_">
                    <use xlink:href="#SVGID_103_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st279">
                    <rect x="443.3" y="440.3" class="st40" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="440.3" class="st41" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="440.3" class="st42" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="440.3" class="st43" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="440.3" class="st44" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_105_" d="M682.2,468.6H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6V464C686.8,466.6,684.8,468.6,682.2,468.6z"></path>
                    </defs>
                    <clipPath id="SVGID_106_">
                    <use xlink:href="#SVGID_105_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st280">
                    <rect x="571.4" y="440.3" class="st46" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="440.3" class="st47" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="440.3" class="st48" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="440.3" class="st49" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="440.3" class="st50" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_107_" d="M810.3,468.6H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6V464C814.9,466.6,812.8,468.6,810.3,468.6z"></path>
                    </defs>
                    <clipPath id="SVGID_108_">
                    <use xlink:href="#SVGID_107_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st281">
                    <rect x="699.4" y="440.3" class="st52" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="440.3" class="st53" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="440.3" class="st54" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="440.3" class="st55" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="440.3" class="st56" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_109_" d="M938.3,468.6H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6V464C942.9,466.6,940.9,468.6,938.3,468.6z"></path>
                    </defs>
                    <clipPath id="SVGID_110_">
                    <use xlink:href="#SVGID_109_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st282">
                    <rect x="827.5" y="440.3" class="st58" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="440.3" class="st59" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="440.3" class="st60" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="440.3" class="st61" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="440.3" class="st62" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                     <g>
                    <g>
                    <defs>
                    <path id="SVGID_111_" d="M426.2,509H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,506.9,428.7,509,426.2,509z"></path>
                    </defs>
                    <clipPath id="SVGID_112_">
                    <use xlink:href="#SVGID_111_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st283">
                    <rect x="315.3" y="480.6" class="st64" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="480.6" class="st65" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="480.6" class="st66" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="480.6" class="st67" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="480.6" class="st68" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_113_" d="M554.2,509H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,506.9,556.7,509,554.2,509z"></path>
                    </defs>
                    <clipPath id="SVGID_114_">
                    <use xlink:href="#SVGID_113_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st284">
                    <rect x="443.3" y="480.6" class="st70" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="480.6" class="st71" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="480.6" class="st72" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="480.6" class="st73" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="480.6" class="st74" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_115_" d="M682.2,509H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C686.8,506.9,684.8,509,682.2,509z"></path>
                    </defs>
                    <clipPath id="SVGID_116_">
                    <use xlink:href="#SVGID_115_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st285">
                    <rect x="571.4" y="480.6" class="st76" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="480.6" class="st77" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="480.6" class="st78" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="480.6" class="st79" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="480.6" class="st80" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_117_" d="M810.3,509H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C814.9,506.9,812.8,509,810.3,509z"></path>
                    </defs>
                    <clipPath id="SVGID_118_">
                    <use xlink:href="#SVGID_117_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st286">
                    <rect x="699.4" y="480.6" class="st82" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="480.6" class="st83" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="480.6" class="st84" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="480.6" class="st85" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="480.6" class="st86" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_119_" d="M938.3,509H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C942.9,506.9,940.9,509,938.3,509z"></path>
                    </defs>
                    <clipPath id="SVGID_120_">
                    <use xlink:href="#SVGID_119_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st287">
                    <rect x="827.5" y="480.6" class="st88" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="480.6" class="st89" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="480.6" class="st90" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="480.6" class="st91" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="480.6" class="st92" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_121_" d="M426.2,549.4H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,547.3,428.7,549.4,426.2,549.4z"></path>
                    </defs>
                    <clipPath id="SVGID_122_">
                    <use xlink:href="#SVGID_121_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st288">
                    <rect x="315.3" y="521" class="st94" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="521" class="st95" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="521" class="st96" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="521" class="st97" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="521" class="st98" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_123_" d="M554.2,549.4H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,547.3,556.7,549.4,554.2,549.4z"></path>
                    </defs>
                    <clipPath id="SVGID_124_">
                    <use xlink:href="#SVGID_123_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st289">
                    <rect x="443.3" y="521" class="st100" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="521" class="st101" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="521" class="st102" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="521" class="st103" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="521" class="st104" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_125_" d="M682.2,549.4H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,547.3,684.8,549.4,682.2,549.4z"></path>
                    </defs>
                    <clipPath id="SVGID_126_">
                    <use xlink:href="#SVGID_125_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st290">
                    <rect x="571.4" y="521" class="st106" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="521" class="st107" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="521" class="st108" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="521" class="st109" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="521" class="st110" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_127_" d="M810.3,549.4H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,547.3,812.8,549.4,810.3,549.4z"></path>
                    </defs>
                    <clipPath id="SVGID_128_">
                    <use xlink:href="#SVGID_127_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st291">
                    <rect x="699.4" y="521" class="st112" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="521" class="st113" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="521" class="st114" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="521" class="st115" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="521" class="st116" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_129_" d="M938.3,549.4H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,547.3,940.9,549.4,938.3,549.4z"></path>
                    </defs>
                    <clipPath id="SVGID_130_">
                    <use xlink:href="#SVGID_129_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st292">
                    <rect x="827.5" y="521" class="st118" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="521" class="st119" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="521" class="st120" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="521" class="st121" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="521" class="st122" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_131_" d="M426.2,589.7H319.9c-2.5,0-4.6-2.1-4.6-4.6V566c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,587.7,428.7,589.7,426.2,589.7z"></path>
                    </defs>
                    <clipPath id="SVGID_132_">
                    <use xlink:href="#SVGID_131_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st293">
                    <rect x="315.3" y="561.4" class="st124" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="561.4" class="st125" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="561.4" class="st126" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="561.4" class="st127" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="561.4" class="st128" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_133_" d="M554.2,589.7H447.9c-2.5,0-4.6-2.1-4.6-4.6V566c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,587.7,556.7,589.7,554.2,589.7z"></path>
                    </defs>
                    <clipPath id="SVGID_134_">
                    <use xlink:href="#SVGID_133_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st294">
                    <rect x="443.3" y="561.4" class="st130" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="561.4" class="st131" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="561.4" class="st132" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="561.4" class="st133" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="561.4" class="st134" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_135_" d="M682.2,589.7H576c-2.5,0-4.6-2.1-4.6-4.6V566c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C686.8,587.7,684.8,589.7,682.2,589.7z"></path>
                    </defs>
                    <clipPath id="SVGID_136_">
                    <use xlink:href="#SVGID_135_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st295">
                    <rect x="571.4" y="561.4" class="st136" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="561.4" class="st137" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="561.4" class="st138" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="561.4" class="st139" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="561.4" class="st140" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_137_" d="M810.3,589.7H704c-2.5,0-4.6-2.1-4.6-4.6V566c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C814.9,587.7,812.8,589.7,810.3,589.7z"></path>
                    </defs>
                    <clipPath id="SVGID_138_">
                    <use xlink:href="#SVGID_137_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st296">
                    <rect x="699.4" y="561.4" class="st142" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="561.4" class="st143" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="561.4" class="st144" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="561.4" class="st145" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="561.4" class="st146" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_139_" d="M938.3,589.7H832c-2.5,0-4.6-2.1-4.6-4.6V566c0-2.5,2.1-4.6,4.6-4.6h106.3c2.5,0,4.6,2.1,4.6,4.6
                                                                v19.2C942.9,587.7,940.9,589.7,938.3,589.7z"></path>
                    </defs>
                    <clipPath id="SVGID_140_">
                    <use xlink:href="#SVGID_139_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st297">
                    <rect x="827.5" y="561.4" class="st148" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="561.4" class="st149" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="561.4" class="st150" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="561.4" class="st151" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="561.4" class="st152" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_141_" d="M426.2,630.1H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,628.1,428.7,630.1,426.2,630.1z"></path>
                    </defs>
                    <clipPath id="SVGID_142_">
                    <use xlink:href="#SVGID_141_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st298">
                    <rect x="315.3" y="601.8" class="st154" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="601.8" class="st155" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="601.8" class="st156" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="601.8" class="st157" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="601.8" class="st158" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_143_" d="M554.2,630.1H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,628.1,556.7,630.1,554.2,630.1z"></path>
                    </defs>
                    <clipPath id="SVGID_144_">
                    <use xlink:href="#SVGID_143_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st299">
                    <rect x="443.3" y="601.8" class="st160" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="601.8" class="st161" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="601.8" class="st162" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="601.8" class="st163" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="601.8" class="st164" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_145_" d="M682.2,630.1H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,628.1,684.8,630.1,682.2,630.1z"></path>
                    </defs>
                    <clipPath id="SVGID_146_">
                    <use xlink:href="#SVGID_145_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st300">
                    <rect x="571.4" y="601.8" class="st166" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="601.8" class="st167" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="601.8" class="st168" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="601.8" class="st169" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="601.8" class="st170" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_147_" d="M810.3,630.1H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,628.1,812.8,630.1,810.3,630.1z"></path>
                    </defs>
                    <clipPath id="SVGID_148_">
                    <use xlink:href="#SVGID_147_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st301">
                    <rect x="699.4" y="601.8" class="st172" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="601.8" class="st173" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="601.8" class="st174" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="601.8" class="st175" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="601.8" class="st176" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_149_" d="M938.3,630.1H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,628.1,940.9,630.1,938.3,630.1z"></path>
                    </defs>
                    <clipPath id="SVGID_150_">
                    <use xlink:href="#SVGID_149_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st302">
                    <rect x="827.5" y="601.8" class="st178" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="601.8" class="st179" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="601.8" class="st180" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="601.8" class="st181" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="601.8" class="st182" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_151_" d="M426.2,670.5H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,668.4,428.7,670.5,426.2,670.5z"></path>
                    </defs>
                    <clipPath id="SVGID_152_">
                    <use xlink:href="#SVGID_151_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st303">
                    <rect x="315.3" y="642.1" class="st184" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="642.1" class="st185" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="642.1" class="st186" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="642.1" class="st187" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="642.1" class="st188" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_153_" d="M554.2,670.5H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,668.4,556.7,670.5,554.2,670.5z"></path>
                    </defs>
                    <clipPath id="SVGID_154_">
                    <use xlink:href="#SVGID_153_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st304">
                    <rect x="443.3" y="642.1" class="st190" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="642.1" class="st191" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="642.1" class="st192" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="642.1" class="st193" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="642.1" class="st194" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_155_" d="M682.2,670.5H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,668.4,684.8,670.5,682.2,670.5z"></path>
                    </defs>
                    <clipPath id="SVGID_156_">
                    <use xlink:href="#SVGID_155_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st305">
                    <rect x="571.4" y="642.1" class="st196" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="642.1" class="st197" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="642.1" class="st198" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="642.1" class="st199" width="25.4" height="28.4"></rect>
                     <rect x="663.7" y="642.1" class="st200" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_157_" d="M810.3,670.5H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,668.4,812.8,670.5,810.3,670.5z"></path>
                    </defs>
                    <clipPath id="SVGID_158_">
                    <use xlink:href="#SVGID_157_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st306">
                    <rect x="699.4" y="642.1" class="st202" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="642.1" class="st203" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="642.1" class="st204" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="642.1" class="st205" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="642.1" class="st206" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_159_" d="M938.3,670.5H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,668.4,940.9,670.5,938.3,670.5z"></path>
                    </defs>
                    <clipPath id="SVGID_160_">
                    <use xlink:href="#SVGID_159_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st307">
                    <rect x="827.5" y="642.1" class="st208" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="642.1" class="st209" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="642.1" class="st210" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="642.1" class="st211" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="642.1" class="st212" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_161_" d="M426.2,710.9H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,708.8,428.7,710.9,426.2,710.9z"></path>
                    </defs>
                    <clipPath id="SVGID_162_">
                    <use xlink:href="#SVGID_161_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st308">
                    <rect x="315.3" y="682.5" class="st214" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="682.5" class="st215" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="682.5" class="st216" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="682.5" class="st217" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="682.5" class="st218" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_163_" d="M554.2,710.9H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,708.8,556.7,710.9,554.2,710.9z"></path>
                    </defs>
                    <clipPath id="SVGID_164_">
                    <use xlink:href="#SVGID_163_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st309">
                    <rect x="443.3" y="682.5" class="st220" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="682.5" class="st221" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="682.5" class="st222" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="682.5" class="st223" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="682.5" class="st224" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_165_" d="M682.2,710.9H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,708.8,684.8,710.9,682.2,710.9z"></path>
                    </defs>
                    <clipPath id="SVGID_166_">
                     <use xlink:href="#SVGID_165_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st310">
                    <rect x="571.4" y="682.5" class="st226" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="682.5" class="st227" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="682.5" class="st228" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="682.5" class="st229" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="682.5" class="st230" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_167_" d="M810.3,710.9H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,708.8,812.8,710.9,810.3,710.9z"></path>
                    </defs>
                    <clipPath id="SVGID_168_">
                    <use xlink:href="#SVGID_167_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st311">
                    <rect x="699.4" y="682.5" class="st232" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="682.5" class="st233" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="682.5" class="st234" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="682.5" class="st235" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="682.5" class="st236" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_169_" d="M938.3,710.9H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,708.8,940.9,710.9,938.3,710.9z"></path>
                    </defs>
                    <clipPath id="SVGID_170_">
                    <use xlink:href="#SVGID_169_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st312">
                    <rect x="827.5" y="682.5" class="st238" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="682.5" class="st239" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="682.5" class="st240" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="682.5" class="st241" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="682.5" class="st242" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_171_" d="M426.2,751.2H319.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C430.7,749.2,428.7,751.2,426.2,751.2z"></path>
                    </defs>
                    <clipPath id="SVGID_172_">
                    <use xlink:href="#SVGID_171_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st313">
                    <rect x="315.3" y="722.9" class="st244" width="25.4" height="28.4"></rect>
                    <rect x="338.4" y="722.9" class="st245" width="25.4" height="28.4"></rect>
                    <rect x="361.5" y="722.9" class="st246" width="25.4" height="28.4"></rect>
                    <rect x="384.6" y="722.9" class="st247" width="25.4" height="28.4"></rect>
                    <rect x="407.6" y="722.9" class="st248" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_173_" d="M554.2,751.2H447.9c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C558.8,749.2,556.7,751.2,554.2,751.2z"></path>
                    </defs>
                    <clipPath id="SVGID_174_">
                    <use xlink:href="#SVGID_173_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st314">
                    <rect x="443.3" y="722.9" class="st250" width="25.4" height="28.4"></rect>
                    <rect x="466.4" y="722.9" class="st251" width="25.4" height="28.4"></rect>
                    <rect x="489.5" y="722.9" class="st252" width="25.4" height="28.4"></rect>
                    <rect x="512.6" y="722.9" class="st253" width="25.4" height="28.4"></rect>
                    <rect x="535.7" y="722.9" class="st254" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_175_" d="M682.2,751.2H576c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C686.8,749.2,684.8,751.2,682.2,751.2z"></path>
                    </defs>
                    <clipPath id="SVGID_176_">
                    <use xlink:href="#SVGID_175_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st315">
                    <rect x="571.4" y="722.9" class="st256" width="25.4" height="28.4"></rect>
                    <rect x="594.5" y="722.9" class="st257" width="25.4" height="28.4"></rect>
                    <rect x="617.6" y="722.9" class="st258" width="25.4" height="28.4"></rect>
                    <rect x="640.6" y="722.9" class="st259" width="25.4" height="28.4"></rect>
                    <rect x="663.7" y="722.9" class="st260" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_177_" d="M810.3,751.2H704c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C814.9,749.2,812.8,751.2,810.3,751.2z"></path>
                    </defs>
                    <clipPath id="SVGID_178_">
                    <use xlink:href="#SVGID_177_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st316">
                    <rect x="699.4" y="722.9" class="st262" width="25.4" height="28.4"></rect>
                    <rect x="722.5" y="722.9" class="st263" width="25.4" height="28.4"></rect>
                    <rect x="745.6" y="722.9" class="st264" width="25.4" height="28.4"></rect>
                    <rect x="768.7" y="722.9" class="st265" width="25.4" height="28.4"></rect>
                    <rect x="791.8" y="722.9" class="st266" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <g>
                    <defs>
                    <path id="SVGID_179_" d="M938.3,751.2H832c-2.5,0-4.6-2.1-4.6-4.6v-19.2c0-2.5,2.1-4.6,4.6-4.6h106.3
                                                                c2.5,0,4.6,2.1,4.6,4.6v19.2C942.9,749.2,940.9,751.2,938.3,751.2z"></path>
                    </defs>
                    <clipPath id="SVGID_180_">
                    <use xlink:href="#SVGID_179_" style="overflow:visible;"></use>
                    </clipPath>
                    <g class="st317">
                    <rect x="827.5" y="722.9" class="st268" width="25.4" height="28.4"></rect>
                    <rect x="850.6" y="722.9" class="st269" width="25.4" height="28.4"></rect>
                    <rect x="873.6" y="722.9" class="st270" width="25.4" height="28.4"></rect>
                    <rect x="896.7" y="722.9" class="st271" width="25.4" height="28.4"></rect>
                    <rect x="919.8" y="722.9" class="st272" width="23.1" height="28.4"></rect>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    <path class="st318" d="M438.5,281v-9.7c0-2.9-2.4-5.3-5.3-5.3l0,0H58.8c-2.9,0-5.3,2.4-5.3,5.3l0,0v9.7H438.5z"></path>
                    <g id="homepage_hero-generate-btn" class="">
                    <g id="homepage_hero-generate-btn-text" class="st319">
                    <rect x="48.7" y="170.9" class="st0" width="123.4" height="25.4"></rect>
                    <path class="st320" d="M55,182.1c0.1-3.9,0.4-6.6,1-6.6h0.1c0.1,0.1,0.7,0.2,0.8,0.8c0.4,1.8,1.1,4.9,2.5,7
                                c0.2-0.1,1.1-1.7,1.6-2.6l0.1-0.2c0.9-1.6,1.5-2.8,2.1-4.3c0.1-0.3,0.3-0.4,0.7-0.4c0.3,0,0.5,0.1,0.8,0.4
                                c-0.2,5.3-0.1,10.7-0.2,16v1.2c-0.1,0.3-0.4,0.6-0.8,0.6c-0.2,0-0.4-0.2-0.6-0.3v-1.4c0.1-4.3-0.1-8.7,0.1-13
                                c-0.6,1-1.2,2.1-1.7,3.1c-0.2,0.4-1.2,2.3-1.4,2.8c-0.1,0.3-0.8,1.1-1.2,0.2c-2.4-5.4-2.5-5.4-2.5-5.4c-0.5,4.3-0.6,8.8-0.6,13.2
                                c0,0.3-0.3,0.5-0.5,0.5c-0.1,0-0.6-0.2-0.7-0.3L55,182.1z"></path>
                    <path class="st320" d="M68.9,189.1l-0.1,0.1l-0.4,2.7c0,0.4,0,1.4-0.7,1.4c-0.3,0-0.5-0.6-0.5-0.9c2.5-17.4,2.5-17.4,2.5-17.4
                                c0.1-0.5,0.3-1.1,0.9-1.1c0.3,0,0.6,0.1,0.7,0.4l0.2,0.5c1.4,5.5,2,11.1,2.7,16.8l0.1,1.6l0,0c-0.2,0.5-0.3,0.6-0.7,0.6h-0.1
                                c-0.1,0-0.4,0-0.4-0.2l-0.6-4.6L68.9,189.1L68.9,189.1z M69.2,187.6l3,0.1l-1.6-11.2L69.2,187.6z"></path>
                    <path class="st320" d="M76.6,175.4c0-0.4,0.3-0.7,0.7-0.7c0.5,0,0.7,0.3,0.7,0.9l0.2,8c1.4-2.9,2.6-5.4,3.2-7.4
                                c0.2-0.7,0.2-1.6,1.1-1.6c0.3,0,1,0.1,0.6,1.2l-3.9,9l4.5,8.3c0.2,0.4,0,1.1-0.6,1.1c-0.3,0-0.4,0-0.6-0.3
                                c-1.3-2.4-2.6-5.6-4.3-8.1v0.2c0,1.1,0.3,5,0.3,8.1c-0.3,0.6-1.3,0.9-1.3,0L76.6,175.4z"></path>
                    <path class="st320" d="M85.8,176.8c0-0.4,0.4-0.8,0.8-0.8h3.8c0.1,0,0.6,0.4,0.6,0.5v0.1c0,0.5-0.6,0.7-1,0.7h-2.9l0.1,8l2.6-0.4
                                H90c1.1,0,0.7,1.1-0.3,1.2l-2.4,0.4l-0.1,6.3c0.2,0,1,0,1.2,0c1.6,0,2.8-0.6,2.9,0.6c0,0.8-5.3,0.7-5.3,0.3L85.8,176.8z"></path>
                    <path class="st320" d="M102.8,189.1l-0.1,0.1l-0.4,2.7c0,0.4,0,1.4-0.7,1.4c-0.3,0-0.5-0.6-0.5-0.9c2.5-17.4,2.5-17.4,2.5-17.4
                                c0.1-0.5,0.3-1.1,0.9-1.1c0.3,0,0.6,0.1,0.7,0.4l0.2,0.5c1.4,5.5,2,11.1,2.7,16.8l0.1,1.6l0,0c-0.2,0.5-0.3,0.6-0.7,0.6h-0.1
                                c-0.1,0-0.4,0-0.4-0.2l-0.6-4.6L102.8,189.1L102.8,189.1z M103.1,187.6l3,0.1l-1.6-11.2L103.1,187.6z"></path>
                    <path class="st320" d="M117.7,188.4c0-1.9,0.1-10.9,0.2-12.8c0.1-0.3,0.7-0.3,1-0.3c2.5,0,4.3,2.2,4.3,4.6c0,2.6-1.8,5.5-4.2,6.6
                                c0,0.4-0.1,2.3-0.1,2.6c0,0.8,0,4.5,0,5.3c-0.1,0.2-0.5,0.3-0.7,0.3s-0.3,0-0.5-0.1C117.7,194.6,117.7,188.4,117.7,188.4z
                                 M119,184.9c0.2,0,0.4,0,0.5-0.2c1.4-1.3,2.2-2.7,2.2-4.7c0-1.2-0.9-3.5-2.5-3.5L119,184.9z"></path>
                    <path class="st320" d="M125.7,189.1l-0.1,0.1l-0.4,2.7c0,0.4,0,1.4-0.7,1.4c-0.3,0-0.5-0.6-0.5-0.9c2.5-17.4,2.5-17.4,2.5-17.4
                                c0.1-0.5,0.3-1.1,0.9-1.1c0.3,0,0.6,0.1,0.7,0.4l0.2,0.5c1.4,5.5,2,11.1,2.7,16.8l0.1,1.6l0,0c-0.2,0.5-0.3,0.6-0.7,0.6h-0.1
                                c-0.1,0-0.4,0-0.4-0.2l-0.6-4.6L125.7,189.1L125.7,189.1z M126.1,187.6l3,0.1l-1.6-11.2L126.1,187.6z"></path>
                    <path class="st320" d="M133.4,194.1c0,0-0.3-12.4-0.3-14c0-0.5-0.3-4.1-0.3-4.6v-0.2c0-0.2,0-0.3,0.2-0.4c0.1,0,0.4,0,0.5,0
                                c0.4,0,0.6,0,0.8,0.5c0.2,0.9,0.1,1.5,0.1,2.4c0.1,4.9,0.2,9.9,0.5,14.8h0.2c1,0,2-0.3,3-0.3c0.4,0,0.8,0.1,0.8,0.6
                                c0,0.3-0.1,0.5-0.5,0.5L133.4,194.1z"></path>
                    <path class="st320" d="M140.2,176.8c0-0.4,0.4-0.8,0.8-0.8h3.8c0.1,0,0.6,0.4,0.6,0.5v0.1c0,0.5-0.6,0.7-1,0.7h-2.9l0.1,8l2.6-0.4
                                h0.1c1.1,0,0.7,1.1-0.3,1.2l-2.4,0.4l-0.1,6.3c0.2,0,1,0,1.2,0c1.6,0,2.8-0.6,2.9,0.6c0,0.8-5.3,0.7-5.3,0.3L140.2,176.8z"></path>
                    <path class="st320" d="M149.7,176.5c-1.5,0.1-2.2,0.1-2.2-0.3c0-0.8,0-1.1,2.5-1h2c0.5,0,1.4,0.1,1.4,0.8c0,0.2-0.3,0.5-0.5,0.5
                                h-2l0.5,15.2c0,0.2-0.5,0.3-0.6,0.3s-0.6-0.1-0.6-0.3L149.7,176.5z"></path>
                    <path class="st320" d="M157.1,176.5c-1.5,0.1-2.2,0.1-2.2-0.3c0-0.8,0-1.1,2.5-1h2c0.5,0,1.4,0.1,1.4,0.8c0,0.2-0.3,0.5-0.5,0.5
                                h-2l0.5,15.2c0,0.2-0.5,0.3-0.6,0.3s-0.6-0.1-0.6-0.3L157.1,176.5z"></path>
                    <path class="st320" d="M162,176.8c0-0.4,0.4-0.8,0.8-0.8h3.8c0.1,0,0.6,0.4,0.6,0.5v0.1c0,0.5-0.6,0.7-1,0.7h-2.9l0.1,8l2.6-0.4
                                h0.1c1.1,0,0.7,1.1-0.3,1.2l-2.4,0.4l-0.1,6.3c0.2,0,1,0,1.2,0c1.6,0,2.8-0.6,2.9,0.6c0,0.8-5.3,0.7-5.3,0.3L162,176.8z"></path>
                    </g>
                    <g id="homepage_hero-generate-btn-arrow">
                    <path class="st321" d="M186.5,188.1c0,0,16.6,5.3,17.2,24.7"></path>
                    <polygon class="st320" points="199.4,209.8 200,209 203.6,212.5 206.8,208.7 207.5,209.3 203.7,213.9 		"></polygon>
                    </g>
                    </g>
                    <g id="homepage_hero-explore">
                    <rect x="570.2" y="464.6" class="st322" width="118.4" height="73.9"></rect>
                    <path class="st320" d="M958,6H299.6c-8.4,0-15.1,6.8-15.1,15.1v431.7c0,8.4,6.8,15.1,15.1,15.1H958c8.4,0,15.1-6.8,15.1-15.1V21.1
                            C973.1,12.8,966.3,6,958,6z M963,20.3v433.5c0,2.3-1.9,4.2-4.2,4.2h-660c-2.3,0-4.2-1.9-4.2-4.2V20.3c0-2.3,1.9-4.2,4.2-4.2h660.1
                            C961.1,16.1,963,18,963,20.3z"></path>
                    <path class="st323" d="M532.6,532h193l0,0c0,5.5-4.5,10-10,10h-173C537.1,542,532.6,537.5,532.6,532L532.6,532z"></path>
                    <path class="st324" d="M963,20.3v433.5c0,2.3-1.9,4.2-4.2,4.2h-660c-2.3,0-4.2-1.9-4.2-4.2V20.3c0-2.3,1.9-4.2,4.2-4.2h660.1
                            C961.1,16.1,963,18,963,20.3z"></path>
                    </g>
                    <g id="homepage_hero-explore-btn" class="">
                    <g id="homepage_hero-explore-btn-text" class="st319">
                    <rect x="167.4" y="62.9" class="st0" width="62.9" height="25.4"></rect>
                    <path class="st320" d="M172.4,81.5v-4.8c0-3.4-0.3-5.6-0.3-9.1v-1.2c3.8-0.3,4.3,0,4.3,0.5c0,0.2-0.1,0.5-0.3,0.6h-2.6
                                c-0.2,0-0.2,0.1-0.2,0.2c0,2.5,0.2,4.4,0.4,7c0.4,0.1,2.4,0,2.8,0c0.8,0,1.4,1.4,0.3,1.4h-3v5.6c0.6,0.1,3.6-0.5,3.6,0.6
                                c0,0.3-0.1,0.6-0.5,0.6h-0.1c-0.9,0.1-4.3,0.3-4.3-0.4L172.4,81.5z"></path>
                    <path class="st320" d="M181,84.6c-0.1,0-0.4,0-0.5,0c-0.3,0-0.8,0-0.8-0.4v-0.1c0-0.1,0.3-0.7,0.3-0.8c0.4-1.2,2.3-6.9,2.6-8.1
                                v-0.3c0-0.5-0.1-0.7-0.3-1.4c-0.2-0.6-1.2-3.3-1.4-3.9c-0.1-0.3-0.8-2-0.9-2.4c-0.1-0.3-0.3-0.6-0.3-0.9c0-0.5,0.1-0.5,0.6-0.5
                                c0.9,0,1.2,1.1,1.5,1.8c0.2,0.7,1.5,4.1,1.7,4.8l1.4-4.6c0.1-0.6,0.4-2.6,1.4-2.3c0.5,0.1,0.5,0.8,0.5,1.2l-1.4,4.1
                                c-0.3,0.9-0.9,3.2-0.9,3.3V75c0,0,0.7,2.4,1.1,3.3c0.7,2,1.6,4.1,2.2,6.1c-0.2,0.4-0.3,0.5-0.7,0.5c-0.2,0-0.4,0-0.6-0.2l-0.1-0.3
                                c-0.1-0.2-0.7-2-0.8-2.2c-0.5-1.4-1-2.9-1.6-4.4c-0.1-0.2-0.3-0.8-0.3-0.8L181,84.6z"></path>
                    <path class="st320" d="M189.5,84.4c0-2.8,0.1-15.7,0.2-18.6c0.2-0.3,0.8-0.5,1.1-0.5c3.1,0,4.6,2.6,4.6,5.5c0,3.4-1.4,5.4-4.3,7
                                l-0.2,1.5c0,0.8-0.1,4.5-0.2,5.2c-0.1,0.4-0.2,0.5-0.6,0.5C189.9,85.1,189.5,85,189.5,84.4L189.5,84.4z M191,75.2v1
                                c0.3,0,0.8-0.3,0.8-0.4c1.6-1.3,2-2.8,2-4.7c0-1.5-0.2-4.3-2.3-4.3c-0.1,0-0.3,0-0.3,0.2L191,75.2z"></path>
                    <path class="st320" d="M198.3,65.5c0.4,0,0.7,0.5,0.8,0.8c0.2,5.4,0.2,10.9,0.6,16.4c0.7-0.2,1.9-0.5,2.9-0.5
                                c0.4,0,0.8,0.1,0.8,0.6c0,0.3-0.1,0.6-0.5,0.7c-0.8,0.3-1.9,0.2-2.7,0.5c-0.3,0.1-0.6,0.3-1,0.3c-0.3,0-0.7-0.3-0.7-0.6
                                c-0.3-2.9-0.2-6-0.3-8.8l-0.3-5.9v-3C198,65.6,198.1,65.5,198.3,65.5z"></path>
                    <path class="st320" d="M207,66.2c5.3,0,6,17.1,0.8,17.5c-0.1,0-0.2,0-0.3,0c-2,0-3.1-1.2-3.7-3.4C203.5,78.9,201,66.2,207,66.2z
                                    M205,79.2c0.2,0.8,1,3.1,2.2,3.2c0.1,0,0.2,0,0.3,0c1.6-0.1,2.1-3,2.4-4.1c0.4-1.9,0.7-10.8-2.7-10.8H207
                                C203.3,67.8,204.5,77.5,205,79.2z"></path>
                    <path class="st320" d="M213,74.4c0-0.7-0.1-5.1-0.2-6.2c0-0.2-0.1-2.4-0.2-2.6v-0.1c0-0.6,0.6-0.7,1.1-0.7c3.3,0,4.5,2.4,4.5,5.1
                                c0,2.2-0.8,3.6-2.4,4.7c2.8,1.2,3.4,5.1,3.4,7.8c0,0.4-0.3,0.6-0.7,0.6c-0.3,0-0.4,0-0.5-0.4c-0.1-1.8-0.6-6.9-3.4-6.9h-0.2
                                c-0.3,2.7,0,5.4-0.2,8.2c-0.3,0.4-1,0.5-1.3,0C213.1,82.5,213.1,75.9,213,74.4z M214.4,73.8c1.7-0.3,2.6-2.2,2.6-3.7
                                c0-1.3-0.5-3.9-2.3-3.9c-0.1,0-0.8,0-0.8,0.2L214.4,73.8z"></path>
                    <path class="st320" d="M221.7,81.5v-4.8c0-3.4-0.3-5.6-0.3-9.1v-1.2c3.8-0.3,4.3,0,4.3,0.5c0,0.2-0.1,0.5-0.3,0.6h-2.6
                                c-0.2,0-0.2,0.1-0.2,0.2c0,2.5,0.2,4.4,0.4,7c0.4,0.1,2.4,0,2.8,0c0.8,0,1.4,1.4,0.3,1.4h-3v5.6c0.6,0.1,3.6-0.5,3.6,0.6
                                c0,0.3-0.1,0.6-0.5,0.6H226c-0.9,0.1-4.3,0.3-4.3-0.4V81.5z"></path>
                    </g>
                    <g id="homepage_hero-explore-btn-arrow">
                    <path class="st321" d="M220.3,102.2c0,0,5.3,16.6,24.7,17.2"></path>
                    <polygon class="st320" points="241.5,123.3 240.9,122.5 244.7,119.4 241.2,115.8 242,115.2 246.1,119.5 		"></polygon>
                    </g>
                    </g>
                    <g id="homepage_hero-generate">
                    <path class="st320" d="M448.5,535.5V267c0.1-7.6-6.1-13.9-13.8-14c0,0,0,0-0.1,0H57.3c-7.7,0.1-13.9,6.3-13.9,13.9c0,0,0,0,0,0.1
                            v268.5H448.5z"></path>
                    <g id="homepage_hero-generator-laptop">
                    <path class="st325" d="M322.5,262.9h112c2.2,0,4,1.8,4,4v255h-116V262.9z" style="fill: rgb(99, 132, 117);"></path>
                    <rect x="247.5" y="262.9" class="st326" width="115" height="259" style="fill: rgb(144, 227, 154);"></rect>
                    <rect x="169.5" y="262.9" class="st327" width="115" height="259" style="fill: rgb(221, 240, 147);"></rect>
                    <rect x="92.5" y="262.9" class="st328" width="116" height="259" style="fill: rgb(246, 208, 177);"></rect>
                    <path class="st329" d="M57.5,262.9h74v259h-78v-255C53.5,264.7,55.3,262.9,57.5,262.9z" style="fill: rgb(206, 71, 96);"></path>
                    </g>
                    <path class="st323" d="M7.5,532h480l0,0c0,5.5-4.5,10-10,10h-460C12,542,7.5,537.5,7.5,532L7.5,532z"></path>
                    </g>
                    <g>
                    <path class="st330" d="M780.7,454.9v61.2h30.7v-61.2c0-9.3-6.9-16.8-15.3-16.8l0,0C787.6,438.2,780.7,445.7,780.7,454.9z"></path>
                    <g>
                    <path class="st330" d="M820.1,492.9h-21.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7h21.7c0.8,0,1.4-0.6,1.4-1.4V470
                                c0-3.7,3-6.7,6.7-6.7s6.7,3,6.7,6.7v8.1C834.9,486.3,828.2,492.9,820.1,492.9z"></path>
                    </g>
                    <g>
                    <path class="st330" d="M791.5,502.9h-19.8c-7.6,0-13.7-6.5-13.7-14.4v-3.2c0-3.5,2.8-6.4,6.4-6.4c3.5,0,6.4,2.8,6.4,6.4v3.2
                                c0,1,0.6,1.7,1,1.7h19.8c3.5,0,6.4,2.8,6.4,6.4S795.1,502.9,791.5,502.9z"></path>
                    </g>
                    <g>
                    <path class="st322" d="M765.1,513.5l2.4,18.3l0.1,0.8c0,0.2,0.1,0.5,0.1,0.7h56.4c0-0.2,0.1-0.5,0.1-0.7l0.1-0.8l2.4-18.3H765.1z"></path>
                    <path class="st323" d="M767.7,533.3c1,5.1,5.4,8.8,10.6,8.8c10.8,0,24.3,0,35.1,0c5.2,0,9.6-3.7,10.6-8.8H767.7z"></path>
                    </g>
                    </g>
                </svg>`;

  parentTag.appendChild(svg);

  const setFill = () => {
    const mobile = document.getElementById("homepage_hero_image-mobile")
    const div = document.getElementById("homepage_hero-generator-laptop");
    const color1 = div.querySelector("path.st325");
    const color2 = div.querySelector("rect.st326");
    const color3 = div.querySelector("rect.st327");
    const color4 = div.querySelector("rect.st328");
    const color5 = div.querySelector("path.st329");
    const colors = [color1, color2, color3, color4, color5];
    colors.forEach(
      (el) =>
        (el.style.fill =
          "#" + Math.floor(Math.random() * 16777215).toString(16))
    );
  };
  const setFill2 = () => {
    const div = document.getElementById("homepage_hero_image-mobile");
    const color1 = div.querySelector("path.st01");
    const color2 = div.querySelector("rect.st11");
    const color3 = div.querySelector("rect.st21");
    const color4 = div.querySelector("rect.st31");
    const color5 = div.querySelector("path.st41");
    const colors = [color1, color2, color3, color4, color5];
    colors.forEach(
      (el) =>
        (el.style.fill =
          "#" + Math.floor(Math.random() * 16777215).toString(16))
    );
  };

  setInterval(setFill, 1000);
  setInterval(setFill2, 1000);
}
