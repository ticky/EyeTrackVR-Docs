import{_ as o,i as t}from"./chunks/index.1d77087a.js";import{o as s,c as d,a,u as l,h as n,g as i,b as e}from"./app.ffc675f3.js";const r=n('<h1 class="text-[var(--font-accent)]" id="updating-platformio" tabindex="-1">Updating Platformio <a class="header-anchor" href="#updating-platformio" aria-hidden="true">#</a></h1><p>Sometimes, when building and uploading the firmware, you may run into bizarre, even-though the code is correct - platformio will refuse to build and instead will complain with some weird error.</p><p>It usually means that either PlatformIO, or ArduinoSDK got and update and that&#39;s the moment when this guide may come in handy.</p><h2 id="updating-platformio-itself" tabindex="-1">Updating PlatformIO itself <a class="header-anchor" href="#updating-platformio-itself" aria-hidden="true">#</a></h2><p>There are two ways to update your platformio installation</p><h3 id="via-cli" tabindex="-1">Via CLI <a class="header-anchor" href="#via-cli" aria-hidden="true">#</a></h3><p>You can update it easily by simply typing in one command into your terminal.</p>',7),c=n('<ol><li>Open a terminal / command prompt</li><li>Type <code>pio upgrade</code> and press enter</li><li>Wait for it to finish</li><li>Done</li></ol><h3 id="via-platformio-in-visual-studio-code" tabindex="-1">Via PlatformIO in Visual Studio Code <a class="header-anchor" href="#via-platformio-in-visual-studio-code" aria-hidden="true">#</a></h3><p>You can also update it using the platformio tab in your Visual Studio Code.</p><ol><li>Open VSC</li><li>Click on that little and icon on the sidebar</li></ol>',4),p=i("ol",{start:"3"},[i("li",null,[e("A side panel will open, there will be a couple of sections, one of them called "),i("code",null,"Quick Access"),e(", open it.")])],-1),u=i("ol",{start:"4"},[i("li",null,[e("In "),i("code",null,"Quick Access"),e(" section, click on the "),i("code",null,"Miscelleneous"),e(" tab")])],-1),h=i("ol",{start:"5"},[i("li",null,[e("Then, click on the "),i("code",null,"Upgrade PlatformIO Core")])],-1),_=n('<ol start="6"><li>Wait for it to finnish and done!</li></ol><h2 id="upgrading-the-sdk" tabindex="-1">Upgrading the SDK <a class="header-anchor" href="#upgrading-the-sdk" aria-hidden="true">#</a></h2><p>You&#39;ll also need to upgrade the SDK from timem to do this</p><h3 id="upgrading-the-sdk-via-vsc" tabindex="-1">Upgrading the SDK via VSC <a class="header-anchor" href="#upgrading-the-sdk-via-vsc" aria-hidden="true">#</a></h3><ol><li>Follow the guide above up until clicking on the <code>Quick Access</code> section.</li><li>Instead, open the <code>PIO Home</code> and select <code>Open</code></li></ol>',5),m=i("ol",{start:"3"},[i("li",null,[e("This will open a window for PlatformIO dashboard, in there, click on a "),i("code",null,"Platforms"),e(" button on the sidebar")])],-1),f=i("ol",{start:"4"},[i("li",null,[e("Once there, you should see a couple of tabs next to the side bard, things like "),i("code",null,"Installed"),e(" or "),i("code",null,"Embedded"),e(". Click on "),i("code",null,"Updates")])],-1),g=i("ol",{start:"5"},[i("li",null,[e("Locate a platform called "),i("code",null,"Espressif 32"),e(" and click on "),i("code",null,"Update to <version>")])],-1),v=i("ol",{start:"6"},[i("li",null,"Wait until it is done and that's it!")],-1),P=JSON.parse('{"title":"Updating Platformio","description":"","frontmatter":{},"headers":[{"level":2,"title":"Updating PlatformIO itself","slug":"updating-platformio-itself","link":"#updating-platformio-itself","children":[{"level":3,"title":"Via CLI","slug":"via-cli","link":"#via-cli","children":[]},{"level":3,"title":"Via PlatformIO in Visual Studio Code","slug":"via-platformio-in-visual-studio-code","link":"#via-platformio-in-visual-studio-code","children":[]}]},{"level":2,"title":"Upgrading the SDK","slug":"upgrading-the-sdk","link":"#upgrading-the-sdk","children":[{"level":3,"title":"Upgrading the SDK via VSC","slug":"upgrading-the-sdk-via-vsc","link":"#upgrading-the-sdk-via-vsc","children":[]}]}],"relativePath":"firmware_guide/update_platformio.md","lastUpdated":1678402493000}'),k={name:"firmware_guide/update_platformio.md"},w=Object.assign(k,{setup(b){return(S,T)=>(s(),d("div",null,[r,a(o,{options:l(t).pio_upgrade_command},null,8,["options"]),c,a(o,{options:l(t).ant_logo_platformio},null,8,["options"]),p,a(o,{options:l(t).platformio_quick_access},null,8,["options"]),u,a(o,{options:l(t).platformio_quick_access_miscellaneous},null,8,["options"]),h,a(o,{options:l(t).platformio_quick_access_upgrade_core},null,8,["options"]),_,a(o,{options:l(t).platformio_pio_home},null,8,["options"]),m,a(o,{options:l(t).platformio_pio_sidebar_platforms},null,8,["options"]),f,a(o,{options:l(t).platformio_pio_sidebar_platforms_updates},null,8,["options"]),g,a(o,{options:l(t).platformio_pio_espressif32},null,8,["options"]),v]))}});export{P as __pageData,w as default};
