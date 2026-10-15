const dsarDomain = "https://cache.mizuho.secuvy.com",
  key = "9cb4a963-775c-448f-9b18-a3dad67c7e56",
  consentUrl =
    "https://consent.mizuho.secuvy.com/assets/e77f51a8-abe2-4955-a93b-6da463afc945/v20/policy.js",
  menuOptions = ["cookies", "subject-request", "company", "legalcenter"],
  dsarPath = "/privacy/rtype",
  dsarParams = { key: key };
let isAlreadyRender = !1;
const addCriticalStyles = () => {
    var e = document.createElement("style");
    ((e.textContent = `
    #secuvy-side-drawer-modal-id {
      position: fixed;
      z-index: 9999999999;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: flex;
      flex-direction: column-reverse;
      background-color: white;
      height: 100%;
      background-position-y: 47%;
    }
    .secuvy-appear-drawer {
      top: 0;
      bottom: 0;
      max-width: 450px !important;
      width: 450px !important;
      background-color: #fff;
      transform: translateX(-100%);
    }
    .secuvy-appear-drawer.show {
      transform: translateX(0%);
      transition-duration: 0.6s;
    }
  `),
      document.head.appendChild(e));
  },
  toRenderWeight =
    (window.addEventListener("message", (e) => {
      try {
        if (dsarDomain.includes(e.origin)) {
          var t = e.data;
          switch (t.type) {
            case "iframe-loaded":
              return void setTimeout(() => {
                var e = document.getElementById("secuvy-dsar-frame");
                (e.contentWindow.postMessage(
                  { type: "menu-options", data: menuOptions },
                  "*",
                ),
                  e.contentWindow.postMessage(
                    { type: "consentId", consentUrl: consentUrl.split("/")[4] },
                    "*",
                  ),
                  e.contentWindow.postMessage(
                    { type: "consentUrl", url: consentUrl },
                    "*",
                  ),
                  setKlaroConfig(!0));
              }, 1e3);
            case "secuvy_consent_accept_selected":
              return void toggleChange(t.cookies);
            case "api_success":
              return void (document.getElementById(
                "secuvy-iframe-header",
              ).style.display = "none");
            case "client_drawer_close":
              closeSecuvyDsarDrawer();
          }
        }
      } catch (e) {
        alert(e);
      }
    }),
    () => {
      try {
        var e = consentUrl.split("/").splice(0, 3).join("/") + "/common",
          t = `<div class="secuvy-mobile-widget-card" id="secuvy-mobile-widget-card"><div class="secuvy-mobile-widget-card-wrapper"><div class="secuvy-mobile-widget-close-btn-wrapper"><img alt="secuvy-mobile-widget-close-btn" src="${e}/secuvy-mobile-widget-close-btn.svg" id="secuvy-mobile-widget-button-closed" onclick="hideSecuvyMobileWidget()"></div><div class="secuvy-widget-card-desc" id="secuvy-mobile-popup-description"></div><div class="secuvy-mobile-widget-btn-wrapper"><button class="secuvy-widget-btn secuvy-widget-btn-outlined" id="secuvy-mobile-weight-reject-all-btn" onclick="resetContentClick()">Reject All</button><button class="secuvy-widget-btn secuvy-widget-btn-filled" id="secuvy-mobile-weight-accept-all-btn" onclick='saveContentClick("accept_all")'>That's ok</button></div><div class="secuvy-mobile-widget-link-group"><a class="secuvy-widget-link" id="secuvy-mobile-widget-link-policies" onclick='openSecuvyDsarDrawer("secuvy-appear-drawer","policies")'>View Policies</a><span class="secuvy-widget-link-divider"></span><a class="secuvy-widget-link" id="secuvy-mobile-widget-link-manage" onclick='openSecuvyDsarDrawer("secuvy-appear-drawer","cookies")'>Manage Preferences</a></div><div class="secuvy-widget-link-dsr"><a class="secuvy-widget-link" id="secuvy-mobile-widget-link-dsr" onclick='openSecuvyDsarDrawer("secuvy-appear-drawer","subject-request")'>Do not Sell My Personal Information</a></div></div><span class="secuvy-gpc-section-centent secuvy-mobile-gpc-section-centent" id="secuvy-mobile-gpc-section-centent"><span class="secuvy-gpc-section-box" id="secuvy-mobile-gpc-section-box">■</span><p class="secuvy-gpc-section-desc" id="secuvy-mobile-gpc-section-desc">GPC Signal detected</p></span></div><div class=secuvy-appear-drawer id=secuvy-side-drawer-modal-id><div class=secuvy-iframe-header id=secuvy-iframe-header><span class=secuvy-iframe-header-close onclick=closeSecuvyDsarDrawer()><img alt=secuvy-iframe-drawer-close-btn src=${e}/secuvy-iframe-drawer-close-btn.svg></span></div><div class=secuvy-iframe-footer><div class=secuvy-iframe-footer-wrapper><span class=footer-text>Powered by</span> <img alt=secuvy-logo src=${e}/secuvy-logo.svg height=auto width=80px></div></div></div><div class=secuvy-widget-button id=secuvy-widget-button onclick=showSecuvyWidget(!1)><img alt=secuvy-widget-button-logo src=${e}/secuvy-widget-button-logo.svg class=secuvy-widget-button-images id=secuvy-widget-button-logo style=display:none> <img alt=secuvy-widget-button-closed src=${e}/secuvy-widget-button-closed.svg class=secuvy-widget-button-images id=secuvy-widget-button-closed style=display:block></div><div class=secuvy-widget-card id=secuvy-widget-card><div class=secuvy-widget-card-body><div class=secuvy-widget-card-desc id=secuvy-popup-description></div><div class=secuvy-widget-btn-group><button class="secuvy-widget-btn secuvy-widget-btn-outlined"id=secuvy-weight-reject-all-btn onclick=resetContentClick()>Reject All</button> <button class="secuvy-widget-btn secuvy-widget-btn-filled"id=secuvy-weight-accept-all-btn onclick='saveContentClick("accept_all")'>That's Ok</button></div><div class=secuvy-widget-link-group><a class=secuvy-widget-link id=secuvy-widget-link-policies onclick='openSecuvyDsarDrawer("secuvy-appear-drawer","policies")'>View Policies</a> <span class=secuvy-widget-link-divider></span> <a class=secuvy-widget-link id=secuvy-widget-link-manage onclick='openSecuvyDsarDrawer("secuvy-appear-drawer","cookies")'>Manage Preferences</a></div><a class=secuvy-widget-link id=secuvy-widget-link-dsr onclick='openSecuvyDsarDrawer("secuvy-appear-drawer","subject-request")'>Do not Sell My Personal Information</a></div><span class=secuvy-gpc-section-centent id=secuvy-gpc-section-centent><span class=secuvy-gpc-section-box id=secuvy-gpc-section-box>■</span><p class=secuvy-gpc-section-desc id=secuvy-gpc-section-desc>GPC Signal detected</span></div>`,
          s = (document.write(t), document.createElement("script"));
        ((s.src = consentUrl),
          (s.id = "policyScript"),
          (s.async = !0),
          (s.onerror = () => {
            alert("Error occurred while loading script");
          }),
          document.head.appendChild(s));
      } catch (e) {
        alert("Exception in widget loading: " + e.toString());
      }
    }),
  showSecuvyWidget = (e) => {
    try {
      var t = document.getElementById("secuvy-widget-button"),
        s = document.getElementById("secuvy-widget-button-logo"),
        c = document.getElementById("secuvy-widget-button-closed"),
        n = document.getElementById("secuvy-widget-card");
      e
        ? ((c.style.display = "block"),
          (s.style.display = "none"),
          t.setAttribute("onclick", "showSecuvyWidget(false);"),
          isAlreadyRender
            ? (n.style.display = "flex")
            : (n.style.display = "none"))
        : ((c.style.display = "none"),
          (s.style.display = "block"),
          (n.style.display = "none"),
          t.setAttribute("onclick", "showSecuvyWidget(true);"));
    } catch (e) {
      alert("Exception in widget drawer: " + e.toString());
    }
  },
  hideSecuvyMobileWidget = (e = !1) => {
    document.getElementById("secuvy-mobile-widget-card").style.display = e
      ? "block"
      : "none";
  },
  openSecuvyDsarDrawer = (e, t, s) => {
    if ((hideSecuvyMobileWidget(!1), isAlreadyRender)) toRouteIframeChild(t, s);
    else {
      e &&
        ((dsarParams.mode = e),
        t
          ? "policies" === (dsarParams.menu = t) && (dsarParams.policy = s)
          : (dsarParams.menu = null));
      try {
        var c,
          n = null;
        (document.getElementById("secuvy-side-drawer-modal-id") &&
          !document.getElementById("secuvy-dsar-frame") &&
          ((c = document.getElementById("secuvy-side-drawer-modal-id")),
          ((n = document.createElement("iframe")).id = "secuvy-dsar-frame"),
          n.setAttribute("loading", "lazy"),
          n.setAttribute("frameborder", "0"),
          (n.style.width = "100%"),
          (n.style.height = "100%"),
          (n.style.overflow = "hidden"),
          c.appendChild(n),
          n.setAttribute(
            "src",
            dsarDomain +
              dsarPath +
              "?" +
              new URLSearchParams(dsarParams).toString(),
          )),
          showSecuvyWidget(!0));
      } catch (e) {
        alert(e);
      }
    }
  },
  closeSecuvyDsarDrawer =
    (addCriticalStyles(),
    toRenderWeight(),
    openSecuvyDsarDrawer("secuvy-appear-drawer"),
    () => {
      ((document.getElementById("secuvy-widget-button").style.display = "none"),
        showSecuvyWidget(),
        document
          .getElementById("secuvy-side-drawer-modal-id")
          .classList.remove("show"),
        (document.getElementById(
          "secuvy-side-drawer-modal-id",
        ).style.transition = "0.6s"));
    }),
  toRouteIframeChild =
    (window.addEventListener("keydown", (e) => {
      "Escape" === e.key && closeSecuvyDsarDrawer();
    }),
    (e, t = null) => {
      try {
        var s = document.getElementById("secuvy-dsar-frame");
        (document
          .getElementById("secuvy-side-drawer-modal-id")
          .classList.add("show"),
          s.contentWindow.postMessage(
            {
              type: "route",
              location: e,
              submenu: t,
              cookiesDetails: KlaroConfig.getManager().savedConsents,
            },
            "*",
          ));
      } catch (e) {
        alert(e);
      }
    });
let Klaro, KlaroConfig;
function cookieDeleteManual(s, c) {
  try {
    let e = 0,
      t = setInterval(() => {
        if (!((e += 1) <= c)) return clearInterval(t);
        s.forEach((e) => {
          e.externalScript ||
            window.klaro.getManager().savedConsents[e.name] ||
            (document.cookie = `${e.name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e.cookies[0][2]};path=/`);
        });
      }, 1e3);
  } catch (e) {
    alert(e);
  }
}
document.addEventListener("scrollend", function () {
  try {
    "object" == typeof window.klaro &&
      cookieDeleteManual(window.klaroConfig.services, 2);
  } catch (e) {
    alert(e);
  }
});
const setKlaroConfig = async (e = !1) => {
    var t = await document.getElementById("secuvy-dsar-frame");
    t &&
      e &&
      (await t.contentWindow.postMessage(
        {
          type: "klaroConfig",
          details: Klaro,
          cookieSelected: getCookieValue("secuvy"),
        },
        "*",
      ),
      (isAlreadyRender = !0));
  },
  onCloseCookieWeight =
    (window.addEventListener("load", function () {
      let w = setInterval(() => {
        try {
          if ("object" == typeof window.klaro) {
            try {
              var s = document.getElementById("secuvy");
              s.parentNode.removeChild(s);
            } catch (s) {
              alert(s);
            }
            let { callback: e, ...t } = window.klaroConfig;
            ((Klaro = t),
              (KlaroConfig = window.klaro),
              cookieDeleteManual(t.services, 10));
            var c = document.getElementById("secuvy-widget-card"),
              n = document.getElementById("secuvy-widget-button"),
              o = document.getElementsByClassName(
                "secuvy_customer_external_link",
              );
            if (o)
              for (let e = 0; e < o.length; e++) o[e].style.display = "block";
            getCookieValue("secuvy")
              ? ((c.style.display = "none"),
                (n.style.display = "none"),
                hideSecuvyMobileWidget())
              : ((c.style.display = "flex"),
                (n.style.display = "flex"),
                hideSecuvyMobileWidget(!0));
            var {
              decline: i,
              ok: l,
              okButtonColorModal: a = "#0085ca",
              popupDescription:
                d = "This site uses cookies. Some of them are essential, while others help us improve your experience.",
              thatsOkTextColor: r = "#FFFFFF",
              thatsOkTextSize: u = "0.8rem",
              declineAllTextColor: y = "#000000",
              declineAllTextSize: g = "0.8rem",
              dsrWidgetText: v = "Do not Sell My Personal Information",
              policiesWidgetText: m = "View Policies",
              managePerferanceWidgetText: p = "Manage Preferences",
            } = t.translations.en;
            return (
              (document.getElementById(
                "secuvy-weight-reject-all-btn",
              ).innerHTML = i),
              (document.getElementById(
                "secuvy-weight-accept-all-btn",
              ).innerHTML = l),
              (document.getElementById(
                "secuvy-widget-link-policies",
              ).innerHTML = m),
              (document.getElementById("secuvy-widget-link-manage").innerHTML =
                p),
              (document.getElementById("secuvy-widget-link-dsr").innerHTML = v),
              (document.getElementById(
                "secuvy-weight-reject-all-btn",
              ).style.color = y),
              (document.getElementById(
                "secuvy-weight-accept-all-btn",
              ).style.color = r),
              (document.getElementById(
                "secuvy-weight-reject-all-btn",
              ).style.fontSize = g),
              (document.getElementById(
                "secuvy-weight-accept-all-btn",
              ).style.fontSize = u),
              (document.getElementById(
                "secuvy-weight-accept-all-btn",
              ).style.backgroundColor = a),
              (document.getElementById(
                "secuvy-weight-accept-all-btn",
              ).style.borderColor = a),
              (document.getElementById("secuvy-popup-description").innerHTML =
                d),
              (document.getElementById(
                "secuvy-mobile-popup-description",
              ).innerHTML = d),
              (document.getElementById(
                "secuvy-mobile-weight-reject-all-btn",
              ).innerHTML = i),
              (document.getElementById(
                "secuvy-mobile-weight-reject-all-btn",
              ).style.color = y),
              (document.getElementById(
                "secuvy-mobile-weight-reject-all-btn",
              ).style.fontSize = g),
              (document.getElementById(
                "secuvy-mobile-weight-accept-all-btn",
              ).innerHTML = l),
              (document.getElementById(
                "secuvy-mobile-weight-accept-all-btn",
              ).style.color = r),
              (document.getElementById(
                "secuvy-mobile-weight-accept-all-btn",
              ).style.fontSize = u),
              (document.getElementById(
                "secuvy-mobile-weight-accept-all-btn",
              ).style.backgroundColor = a),
              (document.getElementById(
                "secuvy-mobile-weight-accept-all-btn",
              ).style.borderColor = a),
              (document.getElementById(
                "secuvy-mobile-widget-link-policies",
              ).innerHTML = m),
              (document.getElementById(
                "secuvy-mobile-widget-link-manage",
              ).innerHTML = p),
              (document.getElementById(
                "secuvy-mobile-widget-link-dsr",
              ).innerHTML = v),
              Klaro.isGpcEnabled &&
                ((this.document.getElementById(
                  "secuvy-gpc-section-centent",
                ).style.display = "flex"),
                (this.document.getElementById(
                  "secuvy-gpc-section-box",
                ).style.color = navigator.globalPrivacyControl
                  ? "#33bb7b"
                  : "#f05a55"),
                (this.document.getElementById(
                  "secuvy-gpc-section-desc",
                ).innerHTML =
                  "GPC signal " +
                  (navigator.globalPrivacyControl
                    ? "detected"
                    : "not detected")),
                (this.document.getElementById(
                  "secuvy-mobile-gpc-section-centent",
                ).style.display = "flex"),
                (this.document.getElementById(
                  "secuvy-mobile-gpc-section-box",
                ).style.color = navigator.globalPrivacyControl
                  ? "#33bb7b"
                  : "#f05a55"),
                (this.document.getElementById(
                  "secuvy-mobile-gpc-section-desc",
                ).innerHTML =
                  "GPC signal " +
                  (navigator.globalPrivacyControl
                    ? "detected"
                    : "not detected"))),
              setKlaroConfig(!0),
              clearInterval(w)
            );
          }
        } catch (s) {
          alert(s);
        }
      }, 100);
    }),
    () => {
      (document
        .getElementById("secuvy-widget-button")
        .setAttribute("onclick", "showSecuvyWidget(true);"),
        (document.getElementById("secuvy-widget-button-logo").style.display =
          "block"),
        (document.getElementById("secuvy-widget-button-closed").style.display =
          "none"),
        (document.getElementById("secuvy-widget-card").style.display = "none"),
        (document.getElementById("secuvy-widget-button").style.display =
          "none"),
        hideSecuvyMobileWidget());
    }),
  createVisitorCookie = () => {
    var e = new Date(),
      t = Math.floor(1e16 * Math.random()).toString();
    return (
      getCookieValue("secuvy-uuid") ||
      ((document.cookie =
        "secuvy-uuid=" +
        t +
        ";path=/;expires=" +
        new Date(e.setDate(e.getDate() + 1))),
      t)
    );
  };
async function saveContentClick(e) {
  const o = KlaroConfig.getManager();
  ("accept_all" === e &&
    (await o.changeAll(!0), Klaro.consentReload) &&
    window.location.reload(),
    setTimeout(async () => {
      (await o.saveAndApplyConsents(),
        setTimeout(() => {
          var e;
          let n = {
              user: "guest",
              version: "1.0.0",
              uniqueVisitorId: createVisitorCookie(),
              countryCode: secuvy_config_country,
              services: [],
              policyName: secuvy_config_policyDetails.policyName,
              policyId: secuvy_config_policyDetails.policyId,
              domain: window.location.hostname || window.location.host,
              consentId: secuvy_config_consentId,
              cookiePageUrl: window.location.href,
            },
            t =
              (secuvy_config_policyDetails &&
                (e = document.cookie
                  .split(";")
                  .find((e) =>
                    e.includes(secuvy_config_policyDetails + "="),
                  )) &&
                (n.uniqueVisitorId = e.split("=")[1] || ""),
              window.klaro.defaultConfig.services.forEach(
                ({ cookies: e, name: t, purposes: s, title: c }) => {
                  n.services.push({
                    cookies: e,
                    name: t,
                    purposes: s,
                    title: c,
                    consent: (o.savedConsents && o.savedConsents[t]) || !1,
                  });
                },
              ),
              new XMLHttpRequest()),
            s = !1;
          (n.services.every((e) => !0 === e.consent) && (s = !0),
            t.open("POST", secuvy_config_api_url),
            t.setRequestHeader(
              "Content-Type",
              "application/json;charset=UTF-8",
            ),
            t.send(JSON.stringify({ ...n, isCookieOptedIn: s })));
        }, 100));
    }, 1e3),
    onCloseCookieWeight());
}
async function toggleChange(t) {
  for (let e = 0; e < t.length; e++)
    await KlaroConfig.getManager().updateConsent(t[e].key, t[e].value);
  saveContentClick();
}
async function resetContentClick() {
  (await KlaroConfig.getManager().changeAll(!1),
    onCloseCookieWeight(),
    saveContentClick());
}
function getCookieValue(e) {
  var t = new RegExp("(?:^|; )" + e + "=([^;]*)"),
    t = document.cookie.match(t);
  return !("secuvy" !== e || !t) || (t ? decodeURIComponent(t[1]) : null);
}
