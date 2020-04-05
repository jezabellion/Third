import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.1b056ef6.js';
import { d as destination, c as chapter } from './morocco.8502293d.js';

/* src/routes/base.svelte generated by Svelte v3.20.1 */
const file = "src/routes/base.svelte";

function create_fragment(ctx) {
	let section;
	let div2;
	let header;
	let div1;
	let div0;
	let a0;
	let img;
	let img_src_value;
	let t0;
	let span3;
	let span0;
	let t1;
	let span1;
	let t2;
	let span2;
	let t3;
	let div5;
	let div4;
	let div3;
	let h1;
	let t4;
	let t5;
	let div7;
	let nav;
	let div6;
	let ul;
	let li0;
	let a1;
	let t6;
	let t7;
	let li1;
	let a2;
	let t8;
	let t9;
	let li2;
	let a3;
	let t10;
	let t11;
	let li3;
	let a4;
	let t12;
	let t13;
	let li4;
	let a5;
	let t14;
	let t15;
	let li5;
	let a6;
	let t16;

	const block = {
		c: function create() {
			section = element("section");
			div2 = element("div");
			header = element("header");
			div1 = element("div");
			div0 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			span3 = element("span");
			span0 = element("span");
			t1 = space();
			span1 = element("span");
			t2 = space();
			span2 = element("span");
			t3 = space();
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			h1 = element("h1");
			t4 = text(destination);
			t5 = space();
			div7 = element("div");
			nav = element("nav");
			div6 = element("div");
			ul = element("ul");
			li0 = element("li");
			a1 = element("a");
			t6 = text("Overview");
			t7 = space();
			li1 = element("li");
			a2 = element("a");
			t8 = text("Modifiers");
			t9 = space();
			li2 = element("li");
			a3 = element("a");
			t10 = text("Grid");
			t11 = space();
			li3 = element("li");
			a4 = element("a");
			t12 = text("Elements");
			t13 = space();
			li4 = element("li");
			a5 = element("a");
			t14 = text("Components");
			t15 = space();
			li5 = element("li");
			a6 = element("a");
			t16 = text("Layout");
			this.h();
		},
		l: function claim(nodes) {
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
			a0 = claim_element(div0_nodes, "A", { class: true });
			var a0_nodes = children(a0);

			img = claim_element(a0_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			span3 = claim_element(div0_nodes, "SPAN", { class: true, "data-target": true });
			var span3_nodes = children(span3);
			span0 = claim_element(span3_nodes, "SPAN", {});
			children(span0).forEach(detach_dev);
			t1 = claim_space(span3_nodes);
			span1 = claim_element(span3_nodes, "SPAN", {});
			children(span1).forEach(detach_dev);
			t2 = claim_space(span3_nodes);
			span2 = claim_element(span3_nodes, "SPAN", {});
			children(span2).forEach(detach_dev);
			span3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t4 = claim_text(h1_nodes, destination);
			h1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div7 = claim_element(section_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			nav = claim_element(div7_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			div6 = claim_element(nav_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			ul = claim_element(div6_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a1 = claim_element(li0_nodes, "A", {});
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "Overview");
			a1_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			a2 = claim_element(li1_nodes, "A", {});
			var a2_nodes = children(a2);
			t8 = claim_text(a2_nodes, "Modifiers");
			a2_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t9 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			a3 = claim_element(li2_nodes, "A", {});
			var a3_nodes = children(a3);
			t10 = claim_text(a3_nodes, "Grid");
			a3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			a4 = claim_element(li3_nodes, "A", {});
			var a4_nodes = children(a4);
			t12 = claim_text(a4_nodes, "Elements");
			a4_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", {});
			var li4_nodes = children(li4);
			a5 = claim_element(li4_nodes, "A", {});
			var a5_nodes = children(a5);
			t14 = claim_text(a5_nodes, "Components");
			a5_nodes.forEach(detach_dev);
			li4_nodes.forEach(detach_dev);
			t15 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", {});
			var li5_nodes = children(li5);
			a6 = claim_element(li5_nodes, "A", {});
			var a6_nodes = children(a6);
			t16 = claim_text(a6_nodes, "Layout");
			a6_nodes.forEach(detach_dev);
			li5_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "wanderlust.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logomark");
			attr_dev(img, "width", "112");
			attr_dev(img, "height", "28");
			add_location(img, file, 64, 12, 1341);
			attr_dev(a0, "class", "navbar-item");
			add_location(a0, file, 63, 10, 1305);
			add_location(span0, file, 67, 12, 1510);
			add_location(span1, file, 68, 12, 1536);
			add_location(span2, file, 69, 12, 1562);
			attr_dev(span3, "class", "navbar-burger burger");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file, 66, 10, 1432);
			attr_dev(div0, "class", "navbar-brand");
			add_location(div0, file, 62, 8, 1268);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 61, 6, 1236);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 60, 4, 1206);
			attr_dev(div2, "class", "hero-head");
			add_location(div2, file, 59, 2, 1178);
			attr_dev(h1, "class", "title svelte-a5dak8");
			add_location(h1, file, 82, 8, 1812);
			attr_dev(div3, "class", "container has-text-centered");
			add_location(div3, file, 81, 6, 1762);
			attr_dev(div4, "class", "shoes hero-body svelte-a5dak8");
			add_location(div4, file, 80, 4, 1726);
			attr_dev(div5, "class", "hero-image");
			add_location(div5, file, 79, 2, 1697);
			add_location(a1, file, 94, 32, 2098);
			attr_dev(li0, "class", "is-active");
			add_location(li0, file, 94, 10, 2076);
			add_location(a2, file, 95, 14, 2133);
			add_location(li1, file, 95, 10, 2129);
			add_location(a3, file, 96, 14, 2169);
			add_location(li2, file, 96, 10, 2165);
			add_location(a4, file, 97, 14, 2200);
			add_location(li3, file, 97, 10, 2196);
			add_location(a5, file, 98, 14, 2235);
			add_location(li4, file, 98, 10, 2231);
			add_location(a6, file, 99, 14, 2272);
			add_location(li5, file, 99, 10, 2268);
			attr_dev(ul, "class", "svelte-a5dak8");
			add_location(ul, file, 93, 8, 2061);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 92, 6, 2029);
			attr_dev(nav, "class", "tabs is-boxed is-fullwidth");
			add_location(nav, file, 91, 4, 1982);
			attr_dev(div7, "class", "hero-foot svelte-a5dak8");
			add_location(div7, file, 90, 2, 1954);
			attr_dev(section, "class", "hero is-success is-fullheight svelte-a5dak8");
			add_location(section, file, 57, 0, 1084);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div2);
			append_dev(div2, header);
			append_dev(header, div1);
			append_dev(div1, div0);
			append_dev(div0, a0);
			append_dev(a0, img);
			append_dev(div0, t0);
			append_dev(div0, span3);
			append_dev(span3, span0);
			append_dev(span3, t1);
			append_dev(span3, span1);
			append_dev(span3, t2);
			append_dev(span3, span2);
			append_dev(section, t3);
			append_dev(section, div5);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, h1);
			append_dev(h1, t4);
			append_dev(section, t5);
			append_dev(section, div7);
			append_dev(div7, nav);
			append_dev(nav, div6);
			append_dev(div6, ul);
			append_dev(ul, li0);
			append_dev(li0, a1);
			append_dev(a1, t6);
			append_dev(ul, t7);
			append_dev(ul, li1);
			append_dev(li1, a2);
			append_dev(a2, t8);
			append_dev(ul, t9);
			append_dev(ul, li2);
			append_dev(li2, a3);
			append_dev(a3, t10);
			append_dev(ul, t11);
			append_dev(ul, li3);
			append_dev(li3, a4);
			append_dev(a4, t12);
			append_dev(ul, t13);
			append_dev(ul, li4);
			append_dev(li4, a5);
			append_dev(a5, t14);
			append_dev(ul, t15);
			append_dev(ul, li5);
			append_dev(li5, a6);
			append_dev(a6, t16);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Base> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Base", $$slots, []);
	$$self.$capture_state = () => ({ destination, chapter });
	return [];
}

class Base extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Base",
			options,
			id: create_fragment.name
		});
	}
}

export default Base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5iNDJhMDA4Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9iYXNlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyBkZXN0aW5hdGlvbiwgY2hhcHRlciB9IGZyb20gJy4vbW9yb2Njby5qcyc7XG48L3NjcmlwdD5cblxuPHN0eWxlIG1lZGlhPVwic2NyZWVuXCIgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4vc3R5bGUvdGhlbWUuc2Nzc1wiO1xuXG4gIC5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICB9XG5cbiAgLmhlcm8tYm9keSBoMSxcbiAgLmhlcm8tYm9keSBoMiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cblxuICAuaGVyby1ib2R5IGgxIHtcbiAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JztcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAtNi4yNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xuICB9XG5cbiAgLmhvbWUgLmhlcm8tYm9keSBoMSB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuXG4gIC5ob21lIC5oZXJvLWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICB9XG5cbiAgLmhvbWUgLmhlcm8taW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiA4cmVtO1xuICAgIG1hcmdpbi1yaWdodDogOHJlbTtcbiAgfVxuXG4gIC5oZXJvLWZvb3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAuaG9tZSAuaGVybyAudGFicyB1bCxcbiAgLmhlcm8gLmhlcm8tZm9vdCAudGFicyB1bCwge1xuICAgIHBhZGRpbmctbGVmdDogMTRyZW07XG4gICAgcGFkZGluZy1yaWdodDogMTRyZW07XG4gIH1cblxuICAuaGVybyAuaGVyby1mb290IC50YWJzIHVsIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgfVxuXG4gIC5oZXJvLWZvb3QgLmhlcm8tYm9keSBoMSB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuXG4gIC5oZXJvLWZvb3QgLmhlcm8tYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICB9XG5cbiAgLnNob2VzLFxuICAuaG9tZS1waWMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9zaG9lcy5qcGdcIikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogOHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhyZW07XG5cbiAgfVxuXG48L3N0eWxlPlxuXG48c2VjdGlvbiBjbGFzcz1cImhlcm8gaXMtc3VjY2VzcyBpcy1mdWxsaGVpZ2h0XCI+XG4gIDwhLS0gSGVybyBoZWFkOiB3aWxsIHN0aWNrIGF0IHRoZSB0b3AgLS0+XG4gIDxkaXYgY2xhc3M9XCJoZXJvLWhlYWRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIndhbmRlcmx1c3Quc3ZnXCIgYWx0PSdsb2dvbWFyaycgd2lkdGg9XCIxMTJcIiBoZWlnaHQ9XCIyOFwiPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIgZGF0YS10YXJnZXQ9XCJuYXZiYXJNZW51SGVyb0NcIj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgPC9kaXY+XG5cbiAgPCEtLSBIZXJvIGNvbnRlbnQ6IHdpbGwgYmUgaW4gdGhlIG1pZGRsZSAtLT5cblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaG9lcyBoZXJvLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICB7ZGVzdGluYXRpb259XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLSBIZXJvIGZvb3Rlcjogd2lsbCBzdGljayBhdCB0aGUgYm90dG9tIC0tPlxuICA8ZGl2IGNsYXNzPVwiaGVyby1mb290XCI+XG4gICAgPG5hdiBjbGFzcz1cInRhYnMgaXMtYm94ZWQgaXMtZnVsbHdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpcy1hY3RpdmVcIj48YT5PdmVydmlldzwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YT5Nb2RpZmllcnM8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGE+R3JpZDwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YT5FbGVtZW50czwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YT5Db21wb25lbnRzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhPkxheW91dDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQW1GVyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBQVgsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
