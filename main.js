const jo = {};

!function JetThemeScript() {
    // Window and document
    const windowObj = window;
    const documentObj = document;
    
     // ===== CONFIGURATION VARIABLES =====
    // Gunakan window scope untuk variables dari custom.js
    const isPreview = windowObj.isPreview !== undefined ? windowObj.isPreview : "";
    const siteUrl = windowObj.siteUrl !== undefined ? windowObj.siteUrl : "";
    const blogId = windowObj.blogId !== undefined ? windowObj.blogId : "";
    const blogTitle = windowObj.blogTitle !== undefined ? windowObj.blogTitle : "";
    const titleSeparator = windowObj.titleSeparator !== undefined ? windowObj.titleSeparator : " - ";
    const pageTitle = windowObj.pageTitle !== undefined ? windowObj.pageTitle : "Page";
    const analyticId = windowObj.analyticId !== undefined ? windowObj.analyticId : false;
    const caPubAdsense = windowObj.caPubAdsense !== undefined ? windowObj.caPubAdsense : false;
    const adsenseClientId = caPubAdsense ? "ca-pub-" + caPubAdsense : false;
    const innerAdsDelimiter = windowObj.innerAdsDelimiter !== undefined ? windowObj.innerAdsDelimiter : "p,br,div";
    const ignoreAdsDelimiter = windowObj.ignoreAdsDelimiter !== undefined ? windowObj.ignoreAdsDelimiter : "pre,ul,ol,table,blockquote";
    const autoTOC = windowObj.autoTOC !== undefined ? windowObj.autoTOC : false;
    const tocTemplate = typeof windowObj.toc_temp === functionStr ? windowObj.toc_temp : false;
    const positionTOC = windowObj.positionTOC !== undefined ? windowObj.positionTOC : false;
    const jetCallback = typeof windowObj.jtCallback === functionStr ? windowObj.jtCallback : false;
    
    // Timing functions
    const setTimeoutFunc = setTimeout;
    const clearTimeoutFunc = clearTimeout;
    const setIntervalFunc = setInterval;
    const clearIntervalFunc = clearInterval;
    
    // Math and data functions
    const DateObj = Date;
    const MathObj = Math;
    const parseIntFunc = parseInt;
    const btoaFunc = btoa;
    const escapeFunc = escape;
    const unescapeFunc = unescape;
    const encodeURIComponentFunc = encodeURIComponent;
    const decodeURIComponentFunc = decodeURIComponent;
    const RegExpObj = RegExp;
    const XMLHttpRequestObj = XMLHttpRequest;
    const alertFunc = alert;
    const localStorageObj = localStorage;
    const JSONObj = JSON;
    const ImageObj = Image;
    
    // String constants
    const forEachStr = "forEach";
    const innerHTMLStr = "innerHTML";
    const tagNameStr = "tagName";
    const getElementByIdStr = "getElementById";
    const getElementsByClassNameStr = "getElementsByClassName";
    const querySelectorStr = "querySelector";
    const querySelectorAllStr = "querySelectorAll";
    const documentElementStr = "documentElement";
    const childNodesStr = "childNodes";
    const createElementStr = "createElement";
    const classNameStr = "className";
    const replaceStr = "replace";
    const indexOfStr = "indexOf";
    const lastIndexOfStr = "lastIndexOf";
    const addEventListenerStr = "addEventListener";
    const addStr = "add";
    const removeStr = "remove";
    const idStr = "id";
    const keyStr = "key";
    const typeStr = "type";
    const parseStr = "parse";
    const lengthStr = "length";
    const callStr = "call";
    const sliceStr = "slice";
    const resetStr = "reset";
    const scrollerStr = "scroller";
    const pushStr = "push";
    const timeStr = "Time";
    const dateStr = "Date";
    const monthStr = "Month";
    const fullYearStr = "FullYear";
    const clientXStr = "clientX";
    const clientYStr = "clientY";
    const pageXStr = "pageX";
    const pageYStr = "pageY";
    const scrollLeftStr = "scrollLeft";
    const scrollTopStr = "scrollTop";
    const onreadystatechangeStr = "onreadystatechange";
    const readyStateStr = "readyState";
    const attributeStr = "Attribute";
    const setStr = "set";
    const getStr = "get";
    const postStr = "post";
    const hasStr = "has";
    const checkedStr = "checked";
    const focusStr = "focus";
    const heightStr = "height";
    const offsetWidthStr = "offsetWidth";
    const offsetHeightStr = "offsetHeight";
    const toFixedStr = "toFixed";
    const pageYOffsetStr = "pageYOffset";
    const appendChildStr = "appendChild";
    const firstChildStr = "firstChild";
    const insertStr = "insert";
    const beforeStr = "Before";
    const valueStr = "value";
    const safeStr = "safe";
    const matchStr = "match";
    const hrefStr = "href";
    const srcStr = "src";
    const onloadStr = "onload";
    const onerrorStr = "onerror";
    const targetStr = "target";
    const closestStr = "closest";
    const locationStr = "location";
    const splitStr = "split";
    const trimStr = "trim";
    const openStr = "open";
    const sendStr = "send";
    const randomStr = "random";
    const statusStr = "status";
    const toStringStr = "toString";
    const parentElementStr = "parentElement";
    const activeElementStr = "activeElement";
    const preventDefaultStr = "preventDefault";
    const substrStr = "substr";
    const setRequestHeaderStr = "setRequestHeader";
    const responseTextStr = "responseText";
    const responseStr = "response";
    const bodyStr = "body";
    const titleStr = "title";
    const testStr = "test";
    const containerStr = "container";
    const ceilStr = "ceil";
    const floorStr = "floor";
    const roundStr = "round";
    const minStr = "min";
    const mapStr = "map";
    const cookieStr = "cookie";
    const containsStr = "contains";
    const toUTCStringStr = "toUTCString";
    const textContentStr = "textContent";
    const elementFromPointStr = "elementFromPoint";
    const itemStr = "Item";
    const nextSiblingStr = "nextSibling";
    const loadStr = "load";
    const trueStr = "true";
    const falseStr = "false";
    const validStr = "valid";
    const scrollStr = "scroll";
    const clickStr = "click";
    const submitStr = "submit";
    const blurStr = "blur";
    const mousemoveStr = "mousemove";
    const mouseupStr = "mouseup";
    const touchstartStr = "touchstart";
    const mousedownStr = "mousedown";
    const changeStr = "change";
    const completeStr = "complete";
    const undefinedStr = "undefined";
    const functionStr = "function";
    const contentTypeStr = "Content-Type";
    const textHtmlStr = "text/html";
    const formUrlencodedStr = "application/x-www-form-urlencoded";
    const paginationStr = "pagination";
    const loadCustomPostsStr = "loadCustomPosts";
    const customPostsStr = "custom_posts";
    const configStr = "config";
    const adsbygoogleStr = "adsbygoogle";
    const analyticsStr = "analytics";
    const jetStr = "jet";
    const httpsStr = "https://";
    const bloggerStr = "www.blogger.com/";
    const rwSuffixStr = "-rw";
    const devicePixelRatioStr = "devicePixelRatio";
    const mountStr = "mount";

    // Utility functions
    function hasClass(element, className) {
        return -1 < (" " + element[classNameStr] + " ")[indexOfStr](" " + className + " ");
    }

    function addClass(element, className) {
        let currentClass;
        if (hasClass(element, className)) return;
        currentClass = element[classNameStr];
        element[classNameStr] = currentClass + (currentClass ? " " : "") + className;
    }

    function removeClass(element, className) {
        element[classNameStr] = element[classNameStr][replaceStr](new RegExpObj("(?:^|\\s)" + className + "(?!\\S)"), "")[trimStr]();
    }

    function toggleClass(element, className) {
        (hasClass(element, className) ? removeClass : addClass)(element, className);
    }

    function animateAddClass(element, className) {
        addClass(element, "d-block");
        setTimeoutFunc(function() {
            addClass(element, className);
        }, 100);
    }

    function animateRemoveClass(element, className, delay) {
        removeClass(element, className);
        setTimeoutFunc(function() {
            removeClass(element, "d-block");
        }, delay || 300);
    }

    function arrayContains(array, value) {
        for (let i = 0; i < array[lengthStr]; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    function generateRandomId() {
        return (MathObj[randomStr]() + 1)[toStringStr](36)[substrStr](7);
    }

    function getUrlParameter(name, url) {
        const regex = new RegExpObj("[?&]" + name + "=([^&#=]*)");
        return regex[testStr](url) && url[matchStr](regex)[1];
    }

    function paginate(totalItems, currentPage, pageSize, maxPages) {
        totalItems = parseIntFunc(totalItems);
        currentPage = parseIntFunc(currentPage);
        pageSize = parseIntFunc(pageSize);
        maxPages = parseIntFunc(maxPages);
        
        let startPage, endPage;
        const totalPages = MathObj[ceilStr](totalItems / pageSize);
        
        if (currentPage < 1) {
            currentPage = 1;
        } else if (totalPages < currentPage) {
            currentPage = totalPages;
        }
        
        if (totalPages <= maxPages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const maxPagesBeforeCurrentPage = MathObj[floorStr](maxPages / 2);
            const maxPagesAfterCurrentPage = MathObj[ceilStr](maxPages / 2) - 1;
            
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                endPage = maxPages;
            } else if (totalPages <= currentPage + maxPagesAfterCurrentPage) {
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = MathObj[minStr](startIndex + pageSize - 1, totalItems - 1);
        
        const pages = [];
        for (let i = 0; i < endPage + 1 - startPage; i++) {
            pages[pushStr](startPage + i);
        }
        
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    function shuffleArray(array) {
        const shuffled = array.slice();
        for (let i = shuffled[lengthStr] - 1; i > 0; i--) {
            const j = MathObj[floorStr](MathObj[randomStr]() * (i + 1));
            const temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    }

    function safeJsonParse(jsonString) {
        try {
            return JSONObj[parseStr](jsonString);
        } catch (error) {
            return false;
        }
    }

    // Safe template function caller untuk custom.js compatibility
    function safeTemplateCall(templateName, data) {
        const templateFunc = windowObj[templateName];
        if (typeof templateFunc === functionStr) {
            return templateFunc(data);
        }
        // Fallback default template
        return "<div>Template not found: " + templateName + "</div>";
    }

    // Check and run jtCallback safely
    function checkAndRunJtCallback() {
        if (typeof jtCallback === functionStr) {
            jtCallback();
        } else {
            // Try again after delay if custom.js not loaded yet
            setTimeout(checkAndRunJtCallback, 100);
        }
    }

    // WebP detection
    let webPRwSuffix = rwSuffixStr;
    !function(detectWebP) {
        const img = new ImageObj();
        img[onloadStr] = img[onerrorStr] = function() {
            detectWebP(img[heightStr] === 2);
        };
        img[srcStr] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }(function(isWebPSupported) {
        if (!isWebPSupported) {
            webPRwSuffix = "";
        }
    });

    // DOM elements
    const headerElement = documentObj[getElementByIdStr]("header");
    const searchToggle = documentObj[getElementByIdStr]("search-toggle");
    const searchHeader = documentObj[getElementByIdStr]("search-header");
    const navbarToggle = documentObj[getElementByIdStr]("navbar-toggle");
    const navbar = documentObj[getElementByIdStr]("navbar");
    const backToTop = documentObj[getElementByIdStr]("back-to-top");
    const darkToggler = documentObj[getElementByIdStr]("dark-toggler");
    const htmlElement = documentObj[querySelectorStr]("html");
    const commentButton = documentObj[getElementByIdStr]("comment-button");
    const threadedCommentForm = documentObj[getElementByIdStr]("threaded-comment-form");
    const commentEditor = documentObj[getElementByIdStr]("comment-editor");
    const commentEditorSrc = documentObj[getElementByIdStr]("comment-editor-src");
    const commentScript = documentObj[getElementByIdStr]("comment-script");
    const commentReplyButtons = documentObj[querySelectorAllStr](".comment-reply");
    const entryTextNoscripts = documentObj[querySelectorAllStr](".entry-text noscript");
    const contactForms = documentObj[querySelectorAllStr](".contact-form-blogger");
    const adsPost = documentObj[getElementByIdStr]("ads-post");
    const postBody = documentObj[querySelectorStr](".post-body");
    const relatedPosts = documentObj[querySelectorStr](".related-posts");
    const relatedInline = documentObj[querySelectorStr](".related-inline");
    const pageParam = getUrlParameter("page", windowObj[locationStr][hrefStr]);
    const isLazyLoaded = localStorageObj !== null && localStorageObj[getStr + itemStr]("lazy") == 1;

    // Site URL construction
    const siteUrlClean = siteUrl ? siteUrl[substrStr](0, siteUrl[lengthStr] - 1)[replaceStr](/(^\w+:|^)\/\//, "") : "";
    const siteUrlHttps = siteUrlClean ? httpsStr + siteUrlClean : "";
    const currentUrl = windowObj[locationStr][hrefStr];

    // Header scroll behavior
    !function(previousScrollY) {
        windowObj[addStr + addEventListenerStr](scrollStr, function() {
            let timeoutId;
            const currentScrollY = this[pageYOffsetStr];
            
            if (currentScrollY < previousScrollY && hasClass(headerElement, "header-hidden")) {
                timeoutId = setTimeoutFunc(function() {
                    removeClass(headerElement, "header-hidden");
                }, 500);
            } else if (previousScrollY < currentScrollY && hasClass(headerElement, "header-animate")) {
                clearTimeoutFunc(timeoutId);
                addClass(headerElement, "header-hidden");
            }
            
            previousScrollY = currentScrollY;
        }, false);
    }(0);

    // Image optimization function
    function optimizeImage(imgElement) {
        let dataSrc, devicePixelRatioValue, newWidth, containerWidth, grandContainerWidth, newHeight, srcParts, qualityIndex, qualitySuffix;
        
        if (imgElement[tagNameStr] === "IMG") {
            dataSrc = imgElement[getStr + attributeStr]("data-src");
            
            if (dataSrc && dataSrc[matchStr](/(bp.blogspot|googleusercontent)/)) {
                devicePixelRatioValue = isLazyLoaded ? (windowObj[devicePixelRatioStr] && windowObj[devicePixelRatioStr] > 1 ? windowObj[devicePixelRatioStr] : 1.5) : 1;
                newWidth = (imgElement[offsetWidthStr] * devicePixelRatioValue)[toFixedStr](0);
                containerWidth = (imgElement[parentElementStr][offsetWidthStr] * devicePixelRatioValue)[toFixedStr](0);
                grandContainerWidth = (imgElement[parentElementStr][parentElementStr][offsetWidthStr] * devicePixelRatioValue)[toFixedStr](0);
                newHeight = (imgElement[offsetHeightStr] * devicePixelRatioValue)[toFixedStr](0);
                srcParts = dataSrc[splitStr]("/");
                qualityIndex = dataSrc[lastIndexOfStr]("=") + 1;
                qualitySuffix = "";
                
                qualitySuffix = hasClass(imgElement[parentElementStr], "ratio") 
                    ? "w" + newWidth + "-h" + newHeight + "-c" + webPRwSuffix 
                    : "s" + (newWidth < 30 ? containerWidth < 30 ? grandContainerWidth : containerWidth : newWidth) + webPRwSuffix;
                
                dataSrc = dataSrc[matchStr](/(img\/a|proxy\/)/) 
                    ? qualityIndex ? dataSrc[sliceStr](0, qualityIndex) + qualitySuffix : dataSrc + "=" + qualitySuffix
                    : dataSrc[replaceStr](srcParts[srcParts[lengthStr] - 2], qualitySuffix);
                
                imgElement[setStr + attributeStr]("data-src", dataSrc);
            } else if (dataSrc && dataSrc[matchStr](/(img.youtube|i.ytimg)/)) {
                dataSrc = dataSrc[substrStr](0, dataSrc[lastIndexOfStr]("/")) + "/mqdefault.jpg";
                imgElement[setStr + attributeStr]("data-src", dataSrc);
            }
        }
    }

    // Pagination function
    function initializePagination(paginationElement) {
        if (paginationElement[getStr + attributeStr]("data-pagination") !== falseStr) {
            const postsPerPage = paginationElement[getStr + attributeStr]("data-posts");
            const labelName = paginationElement[getStr + attributeStr]("data-label");
            const feedPath = labelName ? "-/" + encodeURIComponentFunc(labelName) + "/" : "";
            const searchPath = labelName ? "/label/" + labelName : "";
            
            if (!siteUrlHttps) return;
            
            Defer.js(siteUrlHttps + "/feeds/posts/summary/" + feedPath + "?alt=json&callback=jo." + paginationStr + "_" + keyStr + "&max-results=1");
            
            const maxResultsParam = getUrlParameter("max-results", currentUrl);
            const pageParam = getUrlParameter("page", currentUrl);
            const pageSize = maxResultsParam || postsPerPage;
            const currentPage = pageParam || 1;
            
            jo[paginationStr + "_" + keyStr] = function(feedData) {
                const feed = feedData.feed;
                const totalResults = parseIntFunc(feed.openSearch$totalResults.$t);
                
                if (postsPerPage < totalResults) {
                    const paginationData = paginate(totalResults, currentPage, pageSize, 5);
                    const paginationList = documentObj[createElementStr]("ul");
                    const totalPages = paginationData.totalPages;
                    
                    // Previous button
                    if (paginationData.currentPage !== 1) {
                        const prevItem = createPaginationItem(paginationData.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>');
                        paginationList[appendChildStr](prevItem);
                    }
                    
                    // First page with ellipsis if needed
                    if (!arrayContains(paginationData.pages, 1)) {
                        const firstItem = createPaginationItem(1, paginationData.currentPage, "1 . .");
                        paginationList[appendChildStr](firstItem);
                    }
                    
                    // Page numbers
                    for (let i = 0; i < paginationData.pages[lengthStr]; i++) {
                        const pageItem = createPaginationItem(paginationData.pages[i], paginationData.currentPage);
                        paginationList[appendChildStr](pageItem);
                    }
                    
                    // Last page with ellipsis if needed
                    if (!arrayContains(paginationData.pages, totalPages)) {
                        const lastItem = createPaginationItem(totalPages, paginationData.currentPage, ". . " + totalPages);
                        paginationList[appendChildStr](lastItem);
                    }
                    
                    // Next button
                    if (paginationData.currentPage !== totalPages) {
                        const nextItem = createPaginationItem(paginationData.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>');
                        paginationList[appendChildStr](nextItem);
                    }
                    
                    paginationElement[innerHTMLStr] = "";
                    addClass(paginationList, "pagination mb-0");
                    paginationElement[appendChildStr](paginationList);
                    removeClass(paginationElement, "visually-hidden");
                }
            };
            
            jo[paginationStr + "_date"] = function(entryData) {
                let entry = entryData.feed.entry[0];
                let dateString = entry.published.$t[substrStr](0, 19) + entry.published.$t[substrStr](23, 29);
                dateString = dateString[replaceStr]("+", "%2B");
                
                const url = siteUrlHttps + "/search" + searchPath + "?updated-max=" + dateString + "&max-results=" + pageSize + "&page=" + currentPage;
                windowObj[locationStr][hrefStr] = url;
            };
            
            function createPaginationItem(pageNumber, currentPage, content) {
                const listItem = documentObj[createElementStr]("li");
                const button = documentObj[createElementStr]("span");
                
                addClass(button, "btn btn-sm rounded-pill jt-icon-center");
                button[innerHTMLStr] = content || pageNumber;
                button[setStr + attributeStr]("data-page", pageNumber);
                
                if (pageNumber == currentPage) {
                    addClass(button, "jt-btn-primary");
                } else {
                    addClass(button, "jt-btn-light hover-btn-primary");
                    button[addStr + addEventListenerStr](clickStr, function(event) {
                        event[preventDefaultStr]();
                        const targetPage = button[getStr + attributeStr]("data-page");
                        
                        if (targetPage == 1) {
                            const url = labelName ? siteUrlHttps + "/search" + searchPath + "?max-results=" + postsPerPage + "&page=" + targetPage : siteUrlHttps;
                            windowObj[locationStr][hrefStr] = url;
                        } else {
                            const startIndex = (targetPage - 1) * postsPerPage;
                            Defer.js(siteUrlHttps + "/feeds/posts/summary/" + feedPath + "?start-index=" + startIndex + "&alt=json&callback=jo." + paginationStr + "_date&max-results=1");
                        }
                    });
                }
                
                listItem[appendChildStr](button);
                return listItem;
            }
        } else {
            removeClass(paginationElement, "visually-hidden");
        }
    }

    // Function to fetch page title
    function fetchPageTitle(url, element) {
        const xhr = new XMLHttpRequestObj();
        xhr[openStr](getStr, url);
        xhr[setRequestHeaderStr](contentTypeStr, textHtmlStr);
        xhr[sendStr](null);
        xhr[addStr + addEventListenerStr](loadStr, function() {
            const titleMatch = xhr[responseTextStr][matchStr](/<title>(.*?)<\/title>/);
            if (titleMatch && titleMatch[1]) {
                element[innerHTMLStr] = titleMatch[1][replaceStr](titleSeparator + blogTitle, "");
            }
        });
    }

    // Load custom posts function
    jo[loadCustomPostsStr] = function(customPostsElement) {
        const groupId = generateRandomId();
        const label = customPostsElement[getStr + attributeStr]("data-label");
        const title = customPostsElement[getStr + attributeStr]("data-title");
        const items = customPostsElement[getStr + attributeStr]("data-items");
        const shuffle = customPostsElement[getStr + attributeStr]("data-shuffle");
        const noItem = customPostsElement[getStr + attributeStr]("data-no-item");
        const funcName = customPostsElement[getStr + attributeStr]("data-func");
        const callbackName = customPostsElement[getStr + attributeStr]("data-callback");
        const maxResults = noItem ? parseIntFunc(items) + 1 : items;
        const category = label || customPostsElement[innerHTMLStr];
        const categories = category[splitStr](",");
        let feedPath = "";
        
        if (!siteUrlHttps) return;
        
        feedPath = categories[lengthStr] > 1 
            ? category ? "-/" + encodeURIComponentFunc(categories[MathObj[floorStr](MathObj[randomStr]() * categories[lengthStr])]) + "/?" : "?" 
            : category && category !== falseStr ? "-/" + encodeURIComponentFunc(category[trimStr]()) + "/?" : "?";
        
        Defer.js(siteUrlHttps + "/feeds/posts/summary/" + feedPath + "alt=json&callback=jo." + customPostsStr + "_" + keyStr + "_" + groupId + "&max-results=" + maxResults);
        
        jo[customPostsStr + "_" + keyStr + "_" + groupId] = function(feedData) {
            const feed = feedData.feed;
            const totalResults = parseIntFunc(feed.openSearch$totalResults.$t);
            const categories = feed.category;
            
            if (totalResults > 0) {
                const postsData = {
                    title: title,
                    posts: [],
                    categories: categories
                };
                
                const entries = feed.entry;
                let displayedCount = 0;
                
                for (let i = 0; i < entries[lengthStr]; ++i) {
                    let entry, dateObj, day, month, year;
                    const currentEntry = entries[i];
                    const entryUrl = currentEntry.link[currentEntry.link[lengthStr] - 1][hrefStr];
                    
                    if (displayedCount == items) {
                        break;
                    }
                    
                    if (entryUrl != noItem) {
                        displayedCount++;
                        entry = {};
                        entry.grup_id = groupId;
                        entry.url = entryUrl;
                        entry.title = currentEntry[titleStr].$t;
                        entry.summary = currentEntry.summary.$t[trimStr]();
                        entry.img = currentEntry.media$thumbnail && currentEntry.media$thumbnail.url;
                        entry.author = currentEntry.author[0].name.$t;
                        entry.comment = currentEntry.thr$total && currentEntry.thr$total.$t;
                        entry.label = currentEntry.category;
                        
                        const publishedDate = currentEntry.published.$t;
                        dateObj = new DateObj(publishedDate);
                        day = dateObj[getStr + dateStr]();
                        month = dateObj[getStr + monthStr]() + 1;
                        year = dateObj[getStr + fullYearStr]();
                        entry.date = year + "/" + month + "/" + day;
                        
                        postsData.posts[pushStr](entry);
                    }
                }
                
                let renderFunction = windowObj[funcName];
                if (typeof renderFunction === functionStr && postsData.posts[lengthStr] > 0) {
                    if (shuffle) {
                        postsData.posts = shuffleArray(postsData.posts)[sliceStr](0, shuffle);
                    }
                    
                    customPostsElement[innerHTMLStr] = safeTemplateCall(funcName, postsData)[trimStr]();
                    removeClass(customPostsElement, "visually-hidden");
                    
                    Defer.dom(".lazy-" + groupId, 1, "loaded", optimizeImage);
                    
                    if (callbackName) {
                        let callbackFunction = windowObj[callbackName];
                        if (typeof callbackFunction === functionStr) {
                            callbackFunction();
                        }
                    }
                }
            }
        };
    };

    // Function to initialize post pager
    const initializePostPager = function(pagerElement) {
        const links = pagerElement[querySelectorAllStr]("a");
        for (let i = 0; i < links[lengthStr]; ++i) {
            const link = links[i];
            const url = link[hrefStr];
            const titleElement = documentObj[createElementStr]("span");
            
            addClass(titleElement, "d-block fw-bold pt-2 jt-text-primary");
            link[appendChildStr](titleElement);
            fetchPageTitle(url, titleElement);
        }
    };

    // Toggle header animation
    function toggleHeaderAnimation() {
        ((searchToggle && searchToggle[checkedStr] || navbarToggle && navbarToggle[checkedStr]) ? removeClass : addClass)(headerElement, "header-animate");
    }

    // Close on outside click
    function closeOnOutsideClick(element, callback) {
        function handleClick(event) {
            if (!element[containsStr](event[targetStr])) {
                callback();
                removeEventListener();
            }
        }
        
        function removeEventListener() {
            documentObj[removeStr + addEventListenerStr](clickStr, handleClick);
        }
        
        documentObj[addStr + addEventListenerStr](clickStr, handleClick);
    }

    // Load comment function
    function loadComment(url) {
        if (url != commentEditorSrc[valueStr]) {
            addClass(threadedCommentForm, "loader");
            commentEditorSrc[valueStr] = url;
            commentEditor[srcStr] = url;
        }
        
        if (hasClass(threadedCommentForm, "d-none")) {
            removeClass(threadedCommentForm, "d-none");
            const scriptUrl = commentScript[valueStr][matchStr](/<script.*?src='(.*?)'/)[1];
            Defer.js(scriptUrl, "comment-js", 500, function() {
                if (typeof BLOG_CMT_createIframe === functionStr) {
                    BLOG_CMT_createIframe(httpsStr + bloggerStr + "rpc_relay.html");
                }
            });
        }
    }

    // Event listeners
    if (searchToggle) {
        searchToggle[addStr + addEventListenerStr](changeStr, function() {
            toggleHeaderAnimation();
            if (this[checkedStr]) {
                setTimeoutFunc(function() {
                    const searchInput = documentObj[getElementByIdStr]("search-input");
                    if (searchInput) searchInput[focusStr]();
                }, 100);
            }
            closeOnOutsideClick(searchHeader, function() {
                searchToggle[checkedStr] = false;
                toggleHeaderAnimation();
            });
        });
    }
    
    if (navbarToggle) {
        navbarToggle[addStr + addEventListenerStr](changeStr, function() {
            toggleHeaderAnimation();
            if (this[checkedStr]) {
                animateAddClass(navbar, "show");
                closeOnOutsideClick(navbar, function() {
                    navbarToggle[checkedStr] = false;
                    toggleHeaderAnimation();
                    animateRemoveClass(navbar, "show");
                });
            } else {
                animateRemoveClass(navbar, "show");
            }
        });
    }
    
    if (darkToggler) {
        darkToggler[addStr + addEventListenerStr](clickStr, function(event) {
            event[preventDefaultStr]();
            toggleClass(htmlElement, "dark-mode");
            if (localStorageObj !== null) {
                localStorageObj[setStr + itemStr]("theme", hasClass(htmlElement, "dark-mode") ? "dark" : "light");
            }
        });
    }
    
    windowObj[addStr + addEventListenerStr](scrollStr, function() {
        if (headerElement) {
            ((this[pageYOffsetStr] >= 1) ? addClass : removeClass)(headerElement, "shadow-sm");
        }
        if (backToTop) {
            ((this[pageYOffsetStr] >= 1000) ? removeClass : addClass)(backToTop, "d-none");
        }
    }, false);
    
    if (commentEditor) {
        commentEditor[addStr + addEventListenerStr](loadStr, function() {
            removeClass(threadedCommentForm, "loader");
        });
    }
    
    if (commentButton) {
        commentButton[addStr + addEventListenerStr](clickStr, function(event) {
            event[preventDefaultStr]();
            loadComment(this[hrefStr]);
            if (threadedCommentForm[parentElementStr][idStr] != "add-comment") {
                const addComment = documentObj[getElementByIdStr]("add-comment");
                if (addComment) addComment[appendChildStr](threadedCommentForm);
            }
        });
    }
    
    for (let i = 0; i < commentReplyButtons[lengthStr]; ++i) {
        commentReplyButtons[i][addStr + addEventListenerStr](clickStr, function(event) {
            event[preventDefaultStr]();
            const commentId = this[getStr + attributeStr]("data-comment-id");
            loadComment(this[hrefStr]);
            if (threadedCommentForm[parentElementStr][idStr] != "c" + commentId) {
                const commentElement = documentObj[getElementByIdStr]("c" + commentId);
                if (commentElement) commentElement[appendChildStr](threadedCommentForm);
            }
        });
    }
    
    for (let i = 0; i < contactForms[lengthStr]; ++i) {
        const form = contactForms[i];
        form[addStr + addEventListenerStr](submitStr, function(event) {
            event[preventDefaultStr]();
            const formElement = event[targetStr];
            addClass(formElement, "loading");
            
            const formData = new FormData(formElement);
            let queryString = "blogID=" + blogId;
            
            formData[forEachStr](function(value, key) {
                queryString += "&" + encodeURIComponentFunc(key) + "=" + encodeURIComponentFunc(value);
            });
            
            const url = httpsStr + bloggerStr + "contact-form.do";
            const xhr = new XMLHttpRequestObj();
            xhr[openStr](postStr, url);
            xhr[setRequestHeaderStr](contentTypeStr, formUrlencodedStr);
            xhr[sendStr](queryString);
            xhr[onreadystatechangeStr] = function() {
                let response;
                removeClass(formElement, "loading");
                
                if (this[readyStateStr] === 4 && this[statusStr] === 200 && this[responseStr] !== "") {
                    response = safeJsonParse(this[responseTextStr][trimStr]());
                    
                    if (response && response.details && response.details.emailSentStatus === "true") {
                        formElement[resetStr]();
                        removeClass(formElement, "send-error");
                        addClass(formElement, "send-success");
                    } else {
                        removeClass(formElement, "send-success");
                        addClass(formElement, "send-error");
                    }
                }
            };
        });
    }

    // Main initialization function
    function initializePage(isScrollEvent) {
        if (isScrollEvent && (documentObj[removeStr + addEventListenerStr](mousemoveStr, initializePage), 
            documentObj[removeStr + addEventListenerStr](touchstartStr, initializePage), 
            documentObj[removeStr + addEventListenerStr](scrollStr, initializePage)), 
            Defer.dom(".custom-posts", 1, null, jo[loadCustomPostsStr], null, {rootMargin: "200%"}), 
            entryTextNoscripts && entryTextNoscripts[lengthStr] > 0) {
            
            for (let i = 0; i < entryTextNoscripts[lengthStr]; ++i) {
                const noscript = entryTextNoscripts[i];
                const noscriptContent = noscript[innerHTMLStr];
                const textarea = documentObj[createElementStr]("textarea");
                
                textarea[innerHTMLStr] = noscriptContent[replaceStr](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                
                const div = documentObj[createElementStr]("div");
                div[innerHTMLStr] = textarea[valueStr];
                
                if (i === 0) {
                    addClass(div, "feature-image full-width");
                }
                
                noscript[parentElementStr][replaceStr](div, noscript);
            }
            
            Defer.dom('[lazyload="true"]', 1, "loaded", optimizeImage, null, {rootMargin: "200%"});
        }
        
        if (!isScrollEvent) {
            Defer.dom(".lazyload", 1, "loaded", optimizeImage);
            Defer.dom("#post-pager", 1, null, initializePostPager, null, {rootMargin: "200%"});
            Defer.dom("#pagination", 1, null, initializePagination, null, {rootMargin: "200%"});
        }
        
        if (isScrollEvent) {
            if (postBody && adsPost && !isPreview) {
                const paragraphs = postBody[querySelectorAllStr](innerAdsDelimiter);
                const ignoreElements = postBody[querySelectorAllStr](ignoreAdsDelimiter);
                const adElements = adsPost[childNodesStr];
                const adCount = adElements[lengthStr];
                
                if (adCount > 0 && paragraphs[lengthStr] > 0) {
                    for (let i = 0; i < adCount; i++) {
                        if (i < paragraphs[lengthStr]) {
                            const adClone = adElements[0].cloneNode(true);
                            paragraphs[i][parentElementStr][insertStr + beforeStr](adClone, paragraphs[i][nextSiblingStr]);
                        }
                    }
                }
            }
            
            if (relatedPosts && relatedInline) {
                relatedPosts[innerHTMLStr] = relatedInline[innerHTMLStr];
                relatedPosts[bk + attributeStr]("data-no-item", relatedInline[getStr + attributeStr]("data-no-item"));
            }
            
            if (autoTOC && tocTemplate && postBody) {
                const headings = postBody[querySelectorAllStr]("h2,h3,h4,h5,h6");
                const tocContainer = documentObj[createElementStr]("div");
                
                if (headings[lengthStr] > 0) {
                    const tocData = [];
                    for (let i = 0; i < headings[lengthStr]; i++) {
                        const heading = headings[i];
                        const id = heading[textContentStr][replaceStr](/[^\w!?]/g, "_")[replaceStr](/__/g, "_");
                        const level = parseIntFunc(heading[tagNameStr][replaceStr]("H", ""));
                        heading[setStr + attributeStr]("id", id);
                        tocData[pushStr]({level: level, title: heading[textContentStr], id: id});
                    }
                    
                    tocContainer[innerHTMLStr] = safeTemplateCall("toc_temp", tocData)[trimStr]();
                    
                    let positionElement;
                    if (positionTOC) {
                        positionElement = documentObj[querySelectorStr](positionTOC);
                    }
                    if (!positionElement && postBody[firstChildStr]) {
                        positionElement = postBody[firstChildStr];
                    }
                    
                    if (positionElement) {
                        positionElement[parentElementStr][insertStr + beforeStr](tocContainer, positionElement);
                    }
                }
            }
        }
    }

    // Initialize Defer.js
    !function(r,i,t){var u,o=/^data-(.+)/,a='IntersectionObserver',c=/p/.test(i.readyState),s=[],f=s.slice,l='deferjs',n='load',e='pageshow',d='forEach',h='shift';function m(e){i.head.appendChild(e)}function v(e,n){f.call(e.attributes)[d](n)}function p(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function y(e,n){return f.call((n||i).querySelectorAll(e))}function b(t,e){y('source',t)[d](b),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){u(function(o){o=y(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=p(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&t.setAttribute(e.name,e.value)}),t.src&&!t.hasAttribute('async')?(t.onload=t.onerror=e,m(t)):(m(t),e()))}()})}(u=function(e,n){c?t(e,n):s.push(e,n)}).all=I,u.js=function(n,t,e,o){u(function(e){(e=p('SCRIPT',t,o)).src=n,m(e)},e)},u.css=function(n,t,e,o){u(function(e){(e=p('LINK',t,o)).rel='stylesheet',e.href=n,m(e)},e)},u.dom=function(e,n,t,z,o,i){function c(e){o&&!1===o(e)||b(e,t)}u(function(t){t=a in r&&new r[a](function(e){e[d](function(e,n){e.isIntersecting&&(n=e.target)&&(z&&z(n),t.unobserve(n),c(n))})},i),y(e||'[data-src]')[d](function(e){l in e||(e[l]=1,t?t.observe(e):c(e))})},n)},u.reveal=b,r.Defer=u,r.addEventListener('on'+e in r?e:n,function(){for(I();s[0];t(s[h](),s[h]()))c=1})}(this,document,setTimeout);

    // Polyfill untuk IntersectionObserver
    if(!('IntersectionObserver'in window)){
        document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');
    }

    // Initialize on DOM content loaded
    if (documentObj[readyStateStr] === "complete") {
        initializePage(false);
        checkAndRunJtCallback();
    } else {
        documentObj[addStr + addEventListenerStr]("DOMContentLoaded", function() {
            initializePage(false);
            checkAndRunJtCallback();
        });
    }

    // Initialize on user interaction
    function initOnUserInteraction() {
        initializePage(true);
        documentObj[removeStr + addEventListenerStr](mousemoveStr, initOnUserInteraction);
        documentObj[removeStr + addEventListenerStr](touchstartStr, initOnUserInteraction);
        documentObj[removeStr + addEventListenerStr](scrollStr, initOnUserInteraction);
    }

    documentObj[addStr + addEventListenerStr](mousemoveStr, initOnUserInteraction);
    documentObj[addStr + addEventListenerStr](touchstartStr, initOnUserInteraction);
    documentObj[addStr + addEventListenerStr](scrollStr, initOnUserInteraction);

    // Set page title with page parameter
    if (pageParam) {
        documentObj[titleStr] = documentObj[titleStr][replaceStr](titleSeparator, titleSeparator + pageTitle + " " + pageParam + titleSeparator);
    }

    // URL cleaning dan dark mode initialization
    !function() {
        // URL cleaning function
        function cleanUrl(url, updateHistory = false) {
            var regex = new RegExp(/\?m=0|&m=0|\?m=1|&m=1/g);
            if (regex.test(url)) {
                url = url.replace(regex, "");
                if (updateHistory && windowObj.history && windowObj.history.replaceState) {
                    windowObj.history.replaceState({}, documentObj[titleStr], url);
                }
            }
            return url;
        }

        // Bersihkan URL
        const currentUrl = cleanUrl(windowObj[locationStr][hrefStr], true);

        // Set dark mode
        if (localStorageObj !== null && localStorageObj[getStr + itemStr]("theme") === "dark") {
            addClass(documentObj[querySelectorStr]("html"), "dark-mode");
        }
    }();

}(); 
