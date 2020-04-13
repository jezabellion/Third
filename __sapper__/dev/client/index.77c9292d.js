import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, q as binding_callbacks, r as bind, e as element, a as space, u as create_component, t as text, w as query_selector_all, c as claim_element, f as detach_dev, g as claim_space, x as claim_component, b as children, h as claim_text, j as attr_dev, k as add_location, n as append_dev, m as insert_dev, y as mount_component, o as listen_dev, z as add_flush_callback, A as transition_in, B as transition_out, C as destroy_component } from './client.58dd3491.js';
import { M as ModalNav, d as destination } from './ModalNav.64009cf3.js';

/* src/routes/index.svelte generated by Svelte v3.20.1 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let meta0;
	let meta1;
	let meta2;
	let meta3;
	let meta4;
	let t0;
	let updating_showModal;
	let t1;
	let section;
	let div2;
	let header;
	let div1;
	let div0;
	let a0;
	let img;
	let img_src_value;
	let t2;
	let span3;
	let span0;
	let t3;
	let span1;
	let t4;
	let span2;
	let t5;
	let div5;
	let div4;
	let div3;
	let h1;
	let t6;
	let t7;
	let div7;
	let nav;
	let div6;
	let ul;
	let li0;
	let a1;
	let t8_value = destination.one + "";
	let t8;
	let t9;
	let li1;
	let a2;
	let t10_value = destination.two + "";
	let t10;
	let t11;
	let li2;
	let a3;
	let t12_value = destination.three + "";
	let t12;
	let t13;
	let li3;
	let a4;
	let t14_value = destination.four + "";
	let t14;
	let current;
	let dispose;

	function modalnav_showModal_binding(value) {
		/*modalnav_showModal_binding*/ ctx[1].call(null, value);
	}

	let modalnav_props = {};

	if (/*showModal*/ ctx[0] !== void 0) {
		modalnav_props.showModal = /*showModal*/ ctx[0];
	}

	const modalnav = new ModalNav({ props: modalnav_props, $$inline: true });
	binding_callbacks.push(() => bind(modalnav, "showModal", modalnav_showModal_binding));

	const block = {
		c: function create() {
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			meta3 = element("meta");
			meta4 = element("meta");
			t0 = space();
			create_component(modalnav.$$.fragment);
			t1 = space();
			section = element("section");
			div2 = element("div");
			header = element("header");
			div1 = element("div");
			div0 = element("div");
			a0 = element("a");
			img = element("img");
			t2 = space();
			span3 = element("span");
			span0 = element("span");
			t3 = space();
			span1 = element("span");
			t4 = space();
			span2 = element("span");
			t5 = space();
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			h1 = element("h1");
			t6 = text("Wanderlust");
			t7 = space();
			div7 = element("div");
			nav = element("nav");
			div6 = element("div");
			ul = element("ul");
			li0 = element("li");
			a1 = element("a");
			t8 = text(t8_value);
			t9 = space();
			li1 = element("li");
			a2 = element("a");
			t10 = text(t10_value);
			t11 = space();
			li2 = element("li");
			a3 = element("a");
			t12 = text(t12_value);
			t13 = space();
			li3 = element("li");
			a4 = element("a");
			t14 = text(t14_value);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-17ar0zd\"]", document.head);
			meta0 = claim_element(head_nodes, "META", { property: true, content: true });
			meta1 = claim_element(head_nodes, "META", { property: true, content: true });
			meta2 = claim_element(head_nodes, "META", { property: true, content: true });
			meta3 = claim_element(head_nodes, "META", { property: true, content: true });
			meta4 = claim_element(head_nodes, "META", { property: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(modalnav.$$.fragment, nodes);
			t1 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			header = claim_element(div2_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div1 = claim_element(header_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);

			img = claim_element(a0_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			a0_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			span3 = claim_element(div0_nodes, "SPAN", { class: true, "data-target": true });
			var span3_nodes = children(span3);
			span0 = claim_element(span3_nodes, "SPAN", {});
			children(span0).forEach(detach_dev);
			t3 = claim_space(span3_nodes);
			span1 = claim_element(span3_nodes, "SPAN", {});
			children(span1).forEach(detach_dev);
			t4 = claim_space(span3_nodes);
			span2 = claim_element(span3_nodes, "SPAN", {});
			children(span2).forEach(detach_dev);
			span3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t6 = claim_text(h1_nodes, "Wanderlust");
			h1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			div7 = claim_element(section_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			nav = claim_element(div7_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			div6 = claim_element(nav_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			ul = claim_element(div6_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			a1 = claim_element(li0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, t8_value);
			a1_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t9 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			a2 = claim_element(li1_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t10 = claim_text(a2_nodes, t10_value);
			a2_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			a3 = claim_element(li2_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t12 = claim_text(a3_nodes, t12_value);
			a3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			a4 = claim_element(li3_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t14 = claim_text(a4_nodes, t14_value);
			a4_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Wanderlust";
			attr_dev(meta0, "property", "og:title");
			attr_dev(meta0, "content", "Wanderlust");
			add_location(meta0, file, 88, 2, 1849);
			attr_dev(meta1, "property", "og:type");
			attr_dev(meta1, "content", "website");
			add_location(meta1, file, 89, 2, 1901);
			attr_dev(meta2, "property", "og:url");
			attr_dev(meta2, "content", "https://rambling-man.netlify.com/");
			add_location(meta2, file, 90, 2, 1949);
			attr_dev(meta3, "property", "og:image");
			attr_dev(meta3, "content", "https://rambling-man.netlify.com/images/social-images/home-og.jpg");
			add_location(meta3, file, 91, 2, 2022);
			attr_dev(meta4, "property", "og:description");
			attr_dev(meta4, "content", "Amazing documetation of super duper travels");
			add_location(meta4, file, 92, 2, 2129);
			if (img.src !== (img_src_value = "wanderlust.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logomark");
			attr_dev(img, "width", "112");
			attr_dev(img, "height", "28");
			add_location(img, file, 104, 12, 2535);
			attr_dev(a0, "class", "navbar-item svelte-mp8gi9");
			attr_dev(a0, "href", "./");
			add_location(a0, file, 103, 10, 2489);
			add_location(span0, file, 107, 12, 2738);
			add_location(span1, file, 108, 12, 2764);
			add_location(span2, file, 109, 12, 2790);
			attr_dev(span3, "class", "navbar-burger burger svelte-mp8gi9");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file, 106, 10, 2626);
			attr_dev(div0, "class", "navbar-brand is-hidden-tablet svelte-mp8gi9");
			add_location(div0, file, 102, 8, 2435);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 101, 6, 2403);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 100, 4, 2373);
			attr_dev(div2, "class", "hero-head");
			add_location(div2, file, 99, 2, 2345);
			attr_dev(h1, "class", "svelte-mp8gi9");
			add_location(h1, file, 127, 8, 3045);
			attr_dev(div3, "class", "container");
			add_location(div3, file, 126, 6, 3013);
			attr_dev(div4, "class", "shoes hero-body svelte-mp8gi9");
			add_location(div4, file, 125, 4, 2977);
			attr_dev(div5, "class", "hero-image svelte-mp8gi9");
			add_location(div5, file, 124, 2, 2948);
			attr_dev(a1, "href", "morocco");
			attr_dev(a1, "class", "svelte-mp8gi9");
			add_location(a1, file, 138, 14, 3342);
			add_location(li0, file, 138, 10, 3338);
			attr_dev(a2, "href", "istanbul");
			attr_dev(a2, "class", "svelte-mp8gi9");
			add_location(a2, file, 139, 14, 3401);
			add_location(li1, file, 139, 10, 3397);
			attr_dev(a3, "href", "peru");
			attr_dev(a3, "class", "svelte-mp8gi9");
			add_location(a3, file, 140, 14, 3461);
			add_location(li2, file, 140, 10, 3457);
			attr_dev(a4, "href", "russia");
			attr_dev(a4, "class", "svelte-mp8gi9");
			add_location(a4, file, 141, 14, 3519);
			add_location(li3, file, 141, 10, 3515);
			attr_dev(ul, "class", "svelte-mp8gi9");
			add_location(ul, file, 136, 8, 3265);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 135, 6, 3233);
			attr_dev(nav, "class", "tabs is-fullwidth");
			add_location(nav, file, 134, 4, 3195);
			attr_dev(div7, "class", "hero-foot is-hidden-mobile svelte-mp8gi9");
			add_location(div7, file, 133, 2, 3150);
			attr_dev(section, "class", "hero is-fullheight svelte-mp8gi9");
			add_location(section, file, 97, 0, 2262);
		},
		m: function mount(target, anchor, remount) {
			append_dev(document.head, meta0);
			append_dev(document.head, meta1);
			append_dev(document.head, meta2);
			append_dev(document.head, meta3);
			append_dev(document.head, meta4);
			insert_dev(target, t0, anchor);
			mount_component(modalnav, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, div2);
			append_dev(div2, header);
			append_dev(header, div1);
			append_dev(div1, div0);
			append_dev(div0, a0);
			append_dev(a0, img);
			append_dev(div0, t2);
			append_dev(div0, span3);
			append_dev(span3, span0);
			append_dev(span3, t3);
			append_dev(span3, span1);
			append_dev(span3, t4);
			append_dev(span3, span2);
			append_dev(section, t5);
			append_dev(section, div5);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, h1);
			append_dev(h1, t6);
			append_dev(section, t7);
			append_dev(section, div7);
			append_dev(div7, nav);
			append_dev(nav, div6);
			append_dev(div6, ul);
			append_dev(ul, li0);
			append_dev(li0, a1);
			append_dev(a1, t8);
			append_dev(ul, t9);
			append_dev(ul, li1);
			append_dev(li1, a2);
			append_dev(a2, t10);
			append_dev(ul, t11);
			append_dev(ul, li2);
			append_dev(li2, a3);
			append_dev(a3, t12);
			append_dev(ul, t13);
			append_dev(ul, li3);
			append_dev(li3, a4);
			append_dev(a4, t14);
			current = true;
			if (remount) dispose();
			dispose = listen_dev(span3, "click", /*click_handler*/ ctx[2], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			const modalnav_changes = {};

			if (!updating_showModal && dirty & /*showModal*/ 1) {
				updating_showModal = true;
				modalnav_changes.showModal = /*showModal*/ ctx[0];
				add_flush_callback(() => updating_showModal = false);
			}

			modalnav.$set(modalnav_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(modalnav.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(modalnav.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(meta0);
			detach_dev(meta1);
			detach_dev(meta2);
			detach_dev(meta3);
			detach_dev(meta4);
			if (detaching) detach_dev(t0);
			destroy_component(modalnav, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(section);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { showModal = false } = $$props;
	const writable_props = ["showModal"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	function modalnav_showModal_binding(value) {
		showModal = value;
		$$invalidate(0, showModal);
	}

	const click_handler = () => $$invalidate(0, showModal = true);

	$$self.$set = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	$$self.$capture_state = () => ({ destination, ModalNav, showModal });

	$$self.$inject_state = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showModal, modalnav_showModal_binding, click_handler];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { showModal: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}

	get showModal() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showModal(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzdjOTI5MmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgPlxuICBpbXBvcnQgeyBkZXN0aW5hdGlvbiB9IGZyb20gJy4vZGF0YS5qcyc7XG4gIGltcG9ydCBNb2RhbE5hdiBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsTmF2LnN2ZWx0ZSc7XG4gIGV4cG9ydCBsZXQgc2hvd01vZGFsID0gZmFsc2U7XG48L3NjcmlwdD5cblxuPHN0eWxlIG1lZGlhPVwic2NyZWVuXCIgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4vc3R5bGUvdGhlbWUuc2Nzc1wiO1xuICAuaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICBoMSB7XG4gIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCc7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogLTYuMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgLmhlcm8tYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDhyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhyZW07XG4gIH1cblxuICAuaGVyby1pbWFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA4cmVtO1xuICB9XG5cbiAgLnNob2VzLFxuICAuaG9tZS1waWMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9zaG9lcy5qcGdcIikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLy8gYm90dG9tIG5hdlxuXG4gIC5oZXJvLWZvb3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAuaGVybyAudGFicyB1bCxcbiAgLmhlcm8gLmhlcm8tZm9vdCAudGFicyB1bCwge1xuICAgIHBhZGRpbmctbGVmdDogMTRyZW07XG4gICAgcGFkZGluZy1yaWdodDogMTRyZW07XG4gIH1cblxuICAuaGVybyAuaGVyby1mb290IC50YWJzIHVsIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgfVxuXG4gIC5oZXJvLWZvb3QgLmhlcm8tYm9keSBoMSB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuXG4gIC5oZXJvIC5oZXJvLWZvb3QgLnRhYnMgYSB7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuaGVybyAuaGVyby1mb290IC50YWJzIGE6aG92ZXIge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgfVxuXG4gIC5jaGFwdGVyLWNsb3NlIGgzIHtcbiAgICBjb2xvcjogJGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCc7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgIG1hcmdpbjogMTByZW0gNXJlbTtcbiAgfVxuXG4gIC8vIFJlc3BvbmlzdmUgc2l6ZXNcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmhlcm8taW1hZ2Uge1xuICAgICAgbWFyZ2luOiBhdXRvIDJyZW07XG4gICAgfVxuXG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cblxuICAgIC5uYXZiYXItYnVyZ2VyIHtcbiAgICAgIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaGVyby1ib2R5IGgxIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuc2hvZXMge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL3Nob2VzLXBvcnRyYWl0LmpwZ1wiKSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIC5oZXJvLWJvZHkgaDEge1xuICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC00cHg7XG4gICAgfVxuICB9XG5cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPldhbmRlcmx1c3Q8L3RpdGxlPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIldhbmRlcmx1c3RcIiAvPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vcmFtYmxpbmctbWFuLm5ldGxpZnkuY29tL1wiIC8+XG4gIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9yYW1ibGluZy1tYW4ubmV0bGlmeS5jb20vaW1hZ2VzL3NvY2lhbC1pbWFnZXMvaG9tZS1vZy5qcGdcIiAvPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFtYXppbmcgZG9jdW1ldGF0aW9uIG9mIHN1cGVyIGR1cGVyIHRyYXZlbHNcIiAvPlxuPC9zdmVsdGU6aGVhZD5cblxuPE1vZGFsTmF2IGJpbmQ6c2hvd01vZGFsLz5cblxuPHNlY3Rpb24gY2xhc3M9XCJoZXJvIGlzLWZ1bGxoZWlnaHRcIj5cbiAgPCEtLSBIZXJvIGhlYWQ6IHdpbGwgc3RpY2sgYXQgdGhlIHRvcCAtLT5cbiAgPGRpdiBjbGFzcz1cImhlcm8taGVhZFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZCBpcy1oaWRkZW4tdGFibGV0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiIGhyZWY9Jy4vJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwid2FuZGVybHVzdC5zdmdcIiBhbHQ9J2xvZ29tYXJrJyB3aWR0aD1cIjExMlwiIGhlaWdodD1cIjI4XCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxzcGFuIG9uOmNsaWNrPXsoKSA9PiBzaG93TW9kYWwgPSB0cnVlfSBjbGFzcz1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIgZGF0YS10YXJnZXQ9XCJuYXZiYXJNZW51SGVyb0NcIj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPCEtLSBtb2RhbCAtLT5cblxuXG4gIDwvZGl2PlxuXG4gIDwhLS0gSGVybyBjb250ZW50OiB3aWxsIGJlIGluIHRoZSBtaWRkbGUgLS0+XG5cbiAgPGRpdiBjbGFzcz1cImhlcm8taW1hZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2hvZXMgaGVyby1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5XYW5kZXJsdXN0PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tIEhlcm8gZm9vdGVyOiB3aWxsIHN0aWNrIGF0IHRoZSBib3R0b20gLS0+XG4gIDxkaXYgY2xhc3M9XCJoZXJvLWZvb3QgaXMtaGlkZGVuLW1vYmlsZVwiPlxuICAgIDxuYXYgY2xhc3M9XCJ0YWJzIGlzLWZ1bGx3aWR0aFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPCEtLSA8bGkgY2xhc3M9XCJpcy1hY3RpdmVcIj48YT5Ib21lPC9hPjwvbGk+IC0tPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwibW9yb2Njb1wiPntkZXN0aW5hdGlvbi5vbmV9PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJpc3RhbmJ1bFwiPntkZXN0aW5hdGlvbi50d299PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJwZXJ1XCI+e2Rlc3RpbmF0aW9uLnRocmVlfTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwicnVzc2lhXCI+e2Rlc3RpbmF0aW9uLmZvdXJ9PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkEwSWlDLFdBQVcsQ0FBQyxHQUFHOzs7OztpQkFDZCxXQUFXLENBQUMsR0FBRzs7Ozs7aUJBQ25CLFdBQVcsQ0FBQyxLQUFLOzs7OztpQkFDZixXQUFXLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTFJbkMsU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0F1R0UsU0FBUyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
