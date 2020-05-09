// Compiled by ClojureScript 1.10.741 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1559){
var map__1560 = p__1559;
var map__1560__$1 = (((((!((map__1560 == null))))?(((((map__1560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1560):map__1560);
var m = map__1560__$1;
var n = cljs.core.get.call(null,map__1560__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1560__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1562_1594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1563_1595 = null;
var count__1564_1596 = (0);
var i__1565_1597 = (0);
while(true){
if((i__1565_1597 < count__1564_1596)){
var f_1598 = cljs.core._nth.call(null,chunk__1563_1595,i__1565_1597);
cljs.core.println.call(null,"  ",f_1598);


var G__1599 = seq__1562_1594;
var G__1600 = chunk__1563_1595;
var G__1601 = count__1564_1596;
var G__1602 = (i__1565_1597 + (1));
seq__1562_1594 = G__1599;
chunk__1563_1595 = G__1600;
count__1564_1596 = G__1601;
i__1565_1597 = G__1602;
continue;
} else {
var temp__5735__auto___1603 = cljs.core.seq.call(null,seq__1562_1594);
if(temp__5735__auto___1603){
var seq__1562_1604__$1 = temp__5735__auto___1603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1562_1604__$1)){
var c__4550__auto___1605 = cljs.core.chunk_first.call(null,seq__1562_1604__$1);
var G__1606 = cljs.core.chunk_rest.call(null,seq__1562_1604__$1);
var G__1607 = c__4550__auto___1605;
var G__1608 = cljs.core.count.call(null,c__4550__auto___1605);
var G__1609 = (0);
seq__1562_1594 = G__1606;
chunk__1563_1595 = G__1607;
count__1564_1596 = G__1608;
i__1565_1597 = G__1609;
continue;
} else {
var f_1610 = cljs.core.first.call(null,seq__1562_1604__$1);
cljs.core.println.call(null,"  ",f_1610);


var G__1611 = cljs.core.next.call(null,seq__1562_1604__$1);
var G__1612 = null;
var G__1613 = (0);
var G__1614 = (0);
seq__1562_1594 = G__1611;
chunk__1563_1595 = G__1612;
count__1564_1596 = G__1613;
i__1565_1597 = G__1614;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1615 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1615);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1615)))?cljs.core.second.call(null,arglists_1615):arglists_1615));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1566_1616 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1567_1617 = null;
var count__1568_1618 = (0);
var i__1569_1619 = (0);
while(true){
if((i__1569_1619 < count__1568_1618)){
var vec__1580_1620 = cljs.core._nth.call(null,chunk__1567_1617,i__1569_1619);
var name_1621 = cljs.core.nth.call(null,vec__1580_1620,(0),null);
var map__1583_1622 = cljs.core.nth.call(null,vec__1580_1620,(1),null);
var map__1583_1623__$1 = (((((!((map__1583_1622 == null))))?(((((map__1583_1622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1583_1622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1583_1622):map__1583_1622);
var doc_1624 = cljs.core.get.call(null,map__1583_1623__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1625 = cljs.core.get.call(null,map__1583_1623__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1621);

cljs.core.println.call(null," ",arglists_1625);

if(cljs.core.truth_(doc_1624)){
cljs.core.println.call(null," ",doc_1624);
} else {
}


var G__1626 = seq__1566_1616;
var G__1627 = chunk__1567_1617;
var G__1628 = count__1568_1618;
var G__1629 = (i__1569_1619 + (1));
seq__1566_1616 = G__1626;
chunk__1567_1617 = G__1627;
count__1568_1618 = G__1628;
i__1569_1619 = G__1629;
continue;
} else {
var temp__5735__auto___1630 = cljs.core.seq.call(null,seq__1566_1616);
if(temp__5735__auto___1630){
var seq__1566_1631__$1 = temp__5735__auto___1630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1566_1631__$1)){
var c__4550__auto___1632 = cljs.core.chunk_first.call(null,seq__1566_1631__$1);
var G__1633 = cljs.core.chunk_rest.call(null,seq__1566_1631__$1);
var G__1634 = c__4550__auto___1632;
var G__1635 = cljs.core.count.call(null,c__4550__auto___1632);
var G__1636 = (0);
seq__1566_1616 = G__1633;
chunk__1567_1617 = G__1634;
count__1568_1618 = G__1635;
i__1569_1619 = G__1636;
continue;
} else {
var vec__1585_1637 = cljs.core.first.call(null,seq__1566_1631__$1);
var name_1638 = cljs.core.nth.call(null,vec__1585_1637,(0),null);
var map__1588_1639 = cljs.core.nth.call(null,vec__1585_1637,(1),null);
var map__1588_1640__$1 = (((((!((map__1588_1639 == null))))?(((((map__1588_1639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1588_1639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1588_1639):map__1588_1639);
var doc_1641 = cljs.core.get.call(null,map__1588_1640__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1642 = cljs.core.get.call(null,map__1588_1640__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1638);

cljs.core.println.call(null," ",arglists_1642);

if(cljs.core.truth_(doc_1641)){
cljs.core.println.call(null," ",doc_1641);
} else {
}


var G__1643 = cljs.core.next.call(null,seq__1566_1631__$1);
var G__1644 = null;
var G__1645 = (0);
var G__1646 = (0);
seq__1566_1616 = G__1643;
chunk__1567_1617 = G__1644;
count__1568_1618 = G__1645;
i__1569_1619 = G__1646;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__1590 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1591 = null;
var count__1592 = (0);
var i__1593 = (0);
while(true){
if((i__1593 < count__1592)){
var role = cljs.core._nth.call(null,chunk__1591,i__1593);
var temp__5735__auto___1647__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1647__$1)){
var spec_1648 = temp__5735__auto___1647__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1648));
} else {
}


var G__1649 = seq__1590;
var G__1650 = chunk__1591;
var G__1651 = count__1592;
var G__1652 = (i__1593 + (1));
seq__1590 = G__1649;
chunk__1591 = G__1650;
count__1592 = G__1651;
i__1593 = G__1652;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__1590);
if(temp__5735__auto____$1){
var seq__1590__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1590__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1590__$1);
var G__1653 = cljs.core.chunk_rest.call(null,seq__1590__$1);
var G__1654 = c__4550__auto__;
var G__1655 = cljs.core.count.call(null,c__4550__auto__);
var G__1656 = (0);
seq__1590 = G__1653;
chunk__1591 = G__1654;
count__1592 = G__1655;
i__1593 = G__1656;
continue;
} else {
var role = cljs.core.first.call(null,seq__1590__$1);
var temp__5735__auto___1657__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1657__$2)){
var spec_1658 = temp__5735__auto___1657__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1658));
} else {
}


var G__1659 = cljs.core.next.call(null,seq__1590__$1);
var G__1660 = null;
var G__1661 = (0);
var G__1662 = (0);
seq__1590 = G__1659;
chunk__1591 = G__1660;
count__1592 = G__1661;
i__1593 = G__1662;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1663 = cljs.core.conj.call(null,via,t);
var G__1664 = cljs.core.ex_cause.call(null,t);
via = G__1663;
t = G__1664;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1667 = datafied_throwable;
var map__1667__$1 = (((((!((map__1667 == null))))?(((((map__1667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1667):map__1667);
var via = cljs.core.get.call(null,map__1667__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1667__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1667__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1668 = cljs.core.last.call(null,via);
var map__1668__$1 = (((((!((map__1668 == null))))?(((((map__1668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1668):map__1668);
var type = cljs.core.get.call(null,map__1668__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1668__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1668__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1669 = data;
var map__1669__$1 = (((((!((map__1669 == null))))?(((((map__1669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1669):map__1669);
var problems = cljs.core.get.call(null,map__1669__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1669__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1669__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1670 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1670__$1 = (((((!((map__1670 == null))))?(((((map__1670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1670):map__1670);
var top_data = map__1670__$1;
var source = cljs.core.get.call(null,map__1670__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1675 = phase;
var G__1675__$1 = (((G__1675 instanceof cljs.core.Keyword))?G__1675.fqn:null);
switch (G__1675__$1) {
case "read-source":
var map__1676 = data;
var map__1676__$1 = (((((!((map__1676 == null))))?(((((map__1676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1676):map__1676);
var line = cljs.core.get.call(null,map__1676__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1676__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1678 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1678__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1678,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1678);
var G__1678__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1678__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1678__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1678__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1678__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1679 = top_data;
var G__1679__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1679,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1679);
var G__1679__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1679__$1);
var G__1679__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1679__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1679__$2);
var G__1679__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1679__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1679__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1679__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1679__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1680 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1680,(0),null);
var method = cljs.core.nth.call(null,vec__1680,(1),null);
var file = cljs.core.nth.call(null,vec__1680,(2),null);
var line = cljs.core.nth.call(null,vec__1680,(3),null);
var G__1683 = top_data;
var G__1683__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1683,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1683);
var G__1683__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1683__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1683__$1);
var G__1683__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.call(null,G__1683__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1683__$2);
var G__1683__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1683__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1683__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1683__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1683__$4;
}

break;
case "execution":
var vec__1684 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1684,(0),null);
var method = cljs.core.nth.call(null,vec__1684,(1),null);
var file = cljs.core.nth.call(null,vec__1684,(2),null);
var line = cljs.core.nth.call(null,vec__1684,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1666_SHARP_){
var or__4120__auto__ = (p1__1666_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1666_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__1687 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1687__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1687,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1687);
var G__1687__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1687__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1687__$1);
var G__1687__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1687__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1687__$2);
var G__1687__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1687__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1687__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1687__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1687__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1675__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1691){
var map__1692 = p__1691;
var map__1692__$1 = (((((!((map__1692 == null))))?(((((map__1692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1692):map__1692);
var triage_data = map__1692__$1;
var phase = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1692__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1694 = phase;
var G__1694__$1 = (((G__1694 instanceof cljs.core.Keyword))?G__1694.fqn:null);
switch (G__1694__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1695_1704 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1696_1705 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1697_1706 = true;
var _STAR_print_fn_STAR__temp_val__1698_1707 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1697_1706);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1698_1707);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1689_SHARP_){
return cljs.core.dissoc.call(null,p1__1689_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1696_1705);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1695_1704);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1699_1708 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1700_1709 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1701_1710 = true;
var _STAR_print_fn_STAR__temp_val__1702_1711 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1701_1710);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1702_1711);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1690_SHARP_){
return cljs.core.dissoc.call(null,p1__1690_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1700_1709);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1699_1708);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1694__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
