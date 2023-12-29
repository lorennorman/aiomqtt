Search.setIndex({"docnames": ["alongside-fastapi-and-co", "connecting-to-the-broker", "developer-interface", "index", "introduction", "publishing-a-message", "reconnection", "subscribing-to-a-topic"], "filenames": ["alongside-fastapi-and-co.md", "connecting-to-the-broker.md", "developer-interface.md", "index.md", "introduction.md", "publishing-a-message.md", "reconnection.md", "subscribing-to-a-topic.md"], "titles": ["Alongside FastAPI &amp; Co.", "Connecting to the broker", "Developer interface", "The idiomatic asyncio MQTT client", "Introduction", "Publishing a message", "Reconnection", "Subscribing to a topic"], "terms": {"mani": 0, "web": [0, 7], "framework": [0, 7], "take": [0, 7], "control": 0, "over": 0, "main": [0, 1, 3, 5, 6, 7], "function": [0, 1], "which": [0, 2, 5, 7], "can": [0, 1, 2, 3, 5, 6, 7], "make": [0, 1, 6, 7], "tricki": [0, 1], "figur": 0, "out": [0, 1, 7], "where": [0, 7], "creat": [0, 1, 2, 7], "client": [0, 1, 5, 6, 7], "how": [0, 1, 4, 7], "share": 0, "thi": [0, 1, 2, 3, 4, 5, 6, 7], "connect": [0, 2, 6], "With": [0, 1], "0": [0, 1, 2, 3, 5], "93": 0, "starlett": 0, "you": [0, 1, 2, 3, 4, 5, 7], "us": [0, 1, 2, 3, 4, 5, 7], "lifespan": 0, "context": [0, 1, 2, 6], "manag": [0, 1, 2, 7], "safe": [0, 7], "set": [0, 1, 2, 5, 7], "up": [0, 1], "global": 0, "instanc": [0, 1, 2], "i": [0, 1, 2, 3, 4, 5, 6, 7], "minim": [0, 1, 5, 7], "work": [0, 1, 5, 7], "exampl": [0, 1, 5, 7], "side": 0, "an": [0, 1, 2, 3, 4, 5, 6, 7], "aiomqtt": [0, 1, 2, 3, 4, 5, 6, 7], "listen": [0, 6], "task": [0, 7], "messag": [0, 1, 3, 6], "public": [0, 1, 2], "get": [0, 1, 3, 4, 7], "import": [0, 1, 3, 5, 6, 7], "asyncio": [0, 1, 2, 4, 5, 6, 7], "contextlib": 0, "async": [0, 1, 2, 3, 5, 6, 7], "def": [0, 1, 5, 6, 7], "await": [0, 1, 3, 5, 6, 7], "subscrib": [0, 1, 2, 3, 5, 6], "humid": [0, 1, 3, 6, 7], "print": [0, 3, 6, 7], "payload": [0, 1, 2, 3, 6, 7], "none": [0, 2, 5], "asynccontextmanag": 0, "app": 0, "test": [0, 1, 3, 5, 6, 7], "mosquitto": [0, 1, 3, 5, 6, 7], "org": [0, 1, 3, 5, 6, 7], "c": 0, "avail": [0, 1], "mqtt": [0, 1, 2, 4, 5, 7], "unawait": [0, 7], "loop": [0, 3, 7], "get_event_loop": [0, 7], "create_task": [0, 7], "yield": [0, 2], "cancel": [0, 7], "wait": [0, 2, 3, 7], "try": [0, 3, 4, 6, 7], "except": [0, 1, 6, 7], "cancellederror": [0, 7], "pass": [0, 1, 2, 7], "publish": [0, 1, 2, 3, 7], "outsid": [0, 1, 3, 5, 7], "38": [0, 1, 3], "combin": [0, 3, 7], "some": [0, 4, 7], "concept": 0, "address": [0, 2], "more": [0, 1, 3], "detail": [0, 7], "other": [0, 3, 7], "section": [0, 7], "The": [0, 1, 2, 5, 6], "between": [0, 5], "rout": 0, "explain": [0, 4], "we": [0, 1, 3, 4, 6, 7], "don": [0, 4, 5, 7], "t": [0, 3, 4, 5, 7], "immedi": [0, 5], "order": [0, 2, 7], "avoid": [0, 1], "block": [0, 6], "code": [0, 1, 3, 6, 7], "without": [0, 1], "initi": [0, 1], "": [0, 1, 2, 4, 5, 6, 7], "state": 0, "instead": [0, 2, 3, 7], "variabl": 0, "To": [1, 5, 6, 7], "topic": [1, 5], "first": [1, 2, 7], "need": [1, 4, 7], "temperatur": [1, 5, 7], "28": [1, 5], "4": [1, 5], "run": [1, 3, 5, 6, 7], "when": [1, 2, 4, 5, 7], "enter": 1, "statement": 1, "disconnect": [1, 2, 3], "exit": [1, 7], "again": [1, 7], "easier": 1, "resourc": 1, "like": [1, 3, 6, 7], "network": [1, 2, 6], "file": 1, "ensur": 1, "teardown": 1, "logic": [1, 2], "alwai": [1, 2], "execut": [1, 7], "even": 1, "case": [1, 7], "If": [1, 2, 3, 4, 5, 7], "your": [1, 3, 4, 7], "doe": 1, "allow": [1, 2], "__aenter__": [1, 2], "__aexit__": [1, 2], "method": [1, 2, 3], "directli": [1, 3], "workaround": 1, "similar": [1, 2], "would": 1, "manual": 1, "approach": [1, 7], "sure": 1, "___aexit___": 1, "also": [1, 5], "call": [1, 2, 3, 7], "bit": [1, 7], "right": 1, "ani": [1, 2, 6], "credenti": 1, "altern": 1, "our": [1, 2, 6, 7], "contribut": 1, "guid": [1, 4], "contain": [1, 2], "explan": 1, "spin": 1, "local": [1, 2], "docker": 1, "all": [1, 2, 5, 7], "document": [1, 4], "ar": [1, 3, 4, 5, 6, 7], "self": [1, 2, 7], "runnabl": 1, "For": [1, 2, 4, 5, 7], "list": [1, 2], "argument": [1, 2], "see": [1, 5, 7], "api": 1, "refer": [1, 4, 7], "often": 1, "want": [1, 5, 7], "send": [1, 5], "receiv": [1, 5, 7], "multipl": [1, 5, 7], "differ": [1, 3, 5, 7], "locat": 1, "could": 1, "new": [1, 4, 5, 7], "each": [1, 5, 7], "time": [1, 2, 3, 5, 6, 7], "veri": [1, 3, 7], "perform": 1, "ll": [1, 7], "bandwidth": 1, "publish_temperatur": 1, "publish_humid": 1, "insid": [1, 7], "non": [1, 5], "kept": 1, "aliv": 1, "goe": 1, "offlin": 1, "mean": [1, 2, 6], "store": [1, 5], "subscript": [1, 2, 7], "queue": [1, 2], "qo": [1, 2, 7], "1": [1, 3, 5, 7], "2": [1, 5, 7], "miss": [1, 4], "ha": 1, "yet": 1, "acknowledg": [1, 5], "retransmit": 1, "reconnect": 1, "clean_sess": [1, 2], "paramet": [1, 2, 5, 7], "fals": [1, 2], "true": [1, 2, 5, 6, 7], "amount": [1, 7], "queu": [1, 2, 7], "limit": [1, 7], "memori": 1, "come": [1, 7], "back": [1, 5], "onlin": 1, "long": [1, 6, 7], "eventu": 1, "start": [1, 2, 3, 4, 7], "discard": [1, 2], "class": [2, 7], "hostnam": 2, "str": [2, 5], "port": 2, "int": [2, 5], "1883": 2, "usernam": 2, "password": 2, "logger": 2, "log": 2, "client_id": 2, "tls_context": 2, "ssl": 2, "sslcontext": 2, "tls_param": 2, "tlsparamet": 2, "tls_insecur": 2, "bool": 2, "proxi": 2, "proxyset": 2, "protocol": 2, "protocolvers": 2, "Will": 2, "transport": 2, "tcp": 2, "timeout": 2, "float": [2, 5], "keepal": 2, "60": 2, "bind_address": 2, "bind_port": 2, "clean_start": 2, "3": [2, 3, 7], "properti": 2, "message_retry_set": 2, "20": 2, "socket_opt": 2, "iter": 2, "socketopt": 2, "max_concurrent_outgoing_cal": 2, "websocket_path": 2, "websocket_head": 2, "websockethead": 2, "max_inflight_messag": 2, "max_queued_messag": 2, "broker": [2, 3, 5], "ip": 2, "remot": 2, "authent": 2, "custom": 2, "id": 2, "one": [2, 5, 7], "gener": [2, 7], "automat": [2, 5], "tl": 2, "configur": 2, "enabl": 2, "disabl": 2, "server": 2, "verif": 2, "version": 2, "unexpectedli": 2, "remov": [2, 7], "inform": 2, "about": [2, 3], "persist": 2, "retain": 2, "either": 2, "websocket": 2, "default": [2, 3, 5, 7], "commun": [2, 5], "second": [2, 6, 7], "bind": 2, "v5": 2, "onli": [2, 3, 5, 7], "clean": 2, "flag": 2, "never": 2, "success": 2, "associ": 2, "deprec": 2, "option": [2, 5, 7], "underli": [2, 3], "socket": 2, "maximum": 2, "number": 2, "concurr": 2, "outgo": 2, "path": 2, "header": 2, "part": [2, 5], "wai": [2, 7], "through": [2, 5, 7], "flow": 2, "onc": [2, 5], "unlimit": [2, 7], "tupl": 2, "paho": [2, 3], "subscribeopt": 2, "arg": 2, "kwarg": 2, "reasoncod": 2, "request": [2, 4, 7], "level": [2, 5], "addit": 2, "posit": 2, "complet": 2, "math": 2, "inf": 2, "indefinit": 2, "keyword": 2, "unsubscrib": 2, "from": [2, 3, 6, 7], "unsubscript": 2, "byte": [2, 5], "bytearrai": [2, 5], "queue_class": [2, 7], "type": [2, 3, 5, 7], "queue_maxs": [2, 7], "asyncgener": 2, "incom": [2, 7], "return": [2, 3, 5, 7], "fifo": [2, 7], "lifo": [2, 7], "lifoqueu": [2, 7], "prioriti": [2, 7], "subclass": [2, 7], "priorityqueu": [2, 7], "restrict": 2, "size": [2, 7], "full": 2, "warn": 2, "less": 2, "infinit": [2, 7], "exc_typ": 2, "baseexcept": 2, "exc": 2, "tb": 2, "tracebacktyp": 2, "mid": [2, 7], "wrap": [2, 6], "own": 2, "match": [2, 7], "meant": 2, "instanti": 2, "user": 2, "wa": 2, "qualiti": [2, 7], "servic": [2, 7], "whether": 2, "valu": [2, 7], "string": [2, 5], "check": 2, "given": 2, "against": [2, 6], "otherwis": 2, "A": 2, "placehold": 2, "write": 3, "stabil": 3, "proven": 3, "librari": 3, "interfac": 3, "No": 3, "callback": 3, "welcom": 3, "mqtterror": [3, 6], "grace": 3, "forget": [3, 7], "on_unsubscrib": 3, "on_disconnect": 3, "etc": 3, "support": 3, "5": [3, 6, 7], "fulli": 3, "hint": 3, "did": 3, "mention": 3, "via": 3, "pip": 3, "depend": 3, "latest": 3, "github": [3, 4], "git": 3, "http": [3, 7], "com": 3, "sbtinstrument": 3, "sinc": 3, "python": [3, 7], "8": 3, "event": 3, "proactoreventloop": 3, "said": [3, 4], "doesn": [3, 7], "add_read": 3, "requir": 3, "pleas": 3, "switch": 3, "built": 3, "selectoreventloop": 3, "chang": 3, "selector": 3, "platform": 3, "sy": 3, "lower": [3, 7], "win32": 3, "o": [3, 7], "name": 3, "nt": 3, "set_event_loop_polici": 3, "windowsselectoreventlooppolici": 3, "applic": [3, 6], "usual": [3, 5], "under": 3, "bsd": 3, "claus": 3, "dual": 3, "One": 3, "so": [3, 6, 7], "eclips": 3, "distribut": 3, "v1": 3, "It": [3, 4], "almost": 3, "word": 3, "ident": 3, "copyright": 3, "owner": 3, "edl": 3, "holder": 3, "foundat": 3, "inc": 3, "re": [3, 4, 7], "happi": [3, 4], "read": [3, 4], "md": 3, "adher": 3, "semant": 3, "break": 3, "occur": 3, "major": 3, "x": 3, "releas": 3, "live": 3, "follow": 3, "principl": 3, "keep": [3, 7], "what": [3, 7], "look": 3, "There": 3, "few": 3, "synchron": 3, "micropython": 3, "asynchron": 3, "microcontrol": 3, "gmqtt": 3, "fastapi": 3, "wrapper": 3, "around": 3, "simplifi": 3, "integr": 3, "amqtt": 3, "includ": 3, "trio": 3, "base": [3, 7], "aim": 4, "cover": 4, "everyth": [4, 7], "know": 4, "project": 4, "expect": 4, "knowledg": 4, "thing": [4, 5], "clearli": 4, "possibl": [4, 7], "stuck": 4, "hesit": 4, "discuss": 4, "help": 4, "recommend": 4, "hivemq": 4, "essenti": 4, "afterward": [4, 7], "oasi": [4, 7], "specif": [4, 7], "great": 4, "realpython": 4, "walkthrough": 4, "doc": 4, "big": 4, "open": 4, "issu": 4, "pull": 4, "find": 4, "error": 4, "have": [4, 5, 6, 7], "idea": [4, 7], "improv": 4, "easi": [4, 7], "unclear": 4, "newcom": 4, "alreadi": 4, "familiar": 4, "fresh": 4, "ey": 4, "here": [4, 7], "That": [4, 7], "let": [4, 5, 7], "dive": 4, "transmit": 5, "stream": 5, "accept": 5, "convert": 5, "struct": 5, "pack": 5, "object": 5, "specifi": 5, "zero": 5, "length": 5, "sent": 5, "standard": 5, "implement": [5, 7], "yourself": 5, "dict": 5, "json": 5, "dump": 5, "On": 5, "end": 5, "load": 5, "decod": 5, "reliabl": 5, "three": 5, "At": 5, "most": 5, "guarante": 5, "deliveri": 5, "fastest": 5, "least": 5, "deliv": 5, "possibli": 5, "sender": 5, "until": [5, 7], "receipt": 5, "exactli": 5, "four": 5, "handshak": 5, "slowest": 5, "two": 5, "same": 5, "defin": 5, "relai": 5, "recent": 5, "last": 5, "after": 5, "thei": [5, 7], "per": 5, "previou": [5, 7], "overwritten": 5, "delet": 5, "empti": 5, "howev": 5, "necessari": 5, "overwrit": 5, "ones": 5, "inher": 6, "unstabl": 6, "fail": 6, "especi": 6, "challeng": 6, "resili": 6, "failur": 6, "abl": 6, "detect": 6, "recov": 6, "them": [6, 7], "design": 6, "reusabl": 6, "reentrant": 6, "interv": 6, "while": [6, 7], "f": [6, 7], "lost": 6, "sleep": [6, 7], "wildcard": 7, "now": 7, "appear": 7, "consol": 7, "imagin": 7, "measur": 7, "handl": 7, "provid": 7, "In": 7, "twice": 7, "sequenti": 7, "basi": 7, "modifi": 7, "e": 7, "g": 7, "ascendingli": 7, "ti": 7, "identifi": 7, "sai": 7, "priorit": 7, "custompriorityqueu": 7, "_put": 7, "item": 7, "assign": 7, "super": 7, "_get": 7, "By": 7, "taskgroup": 7, "simul": 7, "bound": 7, "tg": 7, "spawn": 7, "coroutin": 7, "sens": 7, "cpu": 7, "should": 7, "snippet": 7, "abov": 7, "sometim": 7, "singl": 7, "distributor": 7, "sort": 7, "temperature_consum": 7, "temperature_queu": 7, "humidity_consum": 7, "humidity_queu": 7, "appropri": 7, "put_nowait": 7, "elif": 7, "group": 7, "notic": 7, "program": 7, "finish": 7, "practic": 7, "gather": 7, "11": 7, "alongsid": 7, "slept": 7, "becaus": 7, "fire": 7, "care": 7, "rais": 7, "propag": 7, "explicitli": 7, "unhandl": 7, "silent": 7, "ignor": 7, "background_task": 7, "save": 7, "garbag": 7, "collect": 7, "add": 7, "add_done_callback": 7, "do": 7, "someth": 7, "els": 7, "might": 7, "done": 7, "certain": 7, "introduc": 7, "neat": 7, "featur": 7, "result": 7, "timeouterror": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"alongsid": 0, "fastapi": 0, "co": 0, "connect": 1, "broker": 1, "share": 1, "persist": 1, "session": 1, "develop": 2, "interfac": 2, "client": [2, 3], "messag": [2, 5, 7], "topic": [2, 7], "wildcard": 2, "The": [3, 7], "idiomat": 3, "asyncio": 3, "mqtt": 3, "instal": 3, "note": 3, "window": 3, "user": 3, "licens": 3, "contribut": 3, "version": 3, "changelog": 3, "relat": 3, "project": 3, "introduct": 4, "publish": 5, "payload": 5, "encod": 5, "qualiti": 5, "servic": 5, "qo": 5, "retain": 5, "reconnect": 6, "subscrib": 7, "filter": 7, "queue": 7, "process": 7, "concurr": 7, "listen": 7, "without": 7, "block": 7, "stop": 7, "after": 7, "timeout": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Alongside FastAPI & Co.": [[0, "alongside-fastapi-co"]], "Connecting to the broker": [[1, "connecting-to-the-broker"]], "Sharing the connection": [[1, "sharing-the-connection"]], "Persistent sessions": [[1, "persistent-sessions"]], "Developer interface": [[2, "developer-interface"]], "Client": [[2, "client"]], "Message": [[2, "message"]], "Topic": [[2, "topic"]], "Wildcard": [[2, "wildcard"]], "The idiomatic asyncio MQTT client": [[3, "the-idiomatic-asyncio-mqtt-client"]], "Installation": [[3, "installation"]], "Note for Windows users": [[3, "note-for-windows-users"]], "License": [[3, "license"]], "Contributing": [[3, "contributing"]], "Versioning": [[3, "versioning"]], "Changelog": [[3, "changelog"]], "Related projects": [[3, "related-projects"]], "Introduction": [[4, "introduction"]], "Publishing a message": [[5, "publishing-a-message"]], "Payload encoding": [[5, "payload-encoding"]], "Quality of Service (QoS)": [[5, "quality-of-service-qos"]], "Retained messages": [[5, "retained-messages"]], "Reconnection": [[6, "reconnection"]], "Subscribing to a topic": [[7, "subscribing-to-a-topic"]], "Filtering messages": [[7, "filtering-messages"]], "The message queue": [[7, "the-message-queue"]], "Processing concurrently": [[7, "processing-concurrently"]], "Listening without blocking": [[7, "listening-without-blocking"]], "Stop listening": [[7, "stop-listening"]], "Stop listening after timeout": [[7, "stop-listening-after-timeout"]]}, "indexentries": {}})