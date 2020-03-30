import { y as identity, S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, B as Bonkers, v as validate_slots, a as space, e as element, o as create_component, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, p as claim_component, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, r as mount_component, m as append_dev, u as transition_in, z as add_render_callback, A as create_in_transition, w as transition_out, x as destroy_component } from './client.f3091f88.js';
import { T as Truman } from './Truman.217e9b26.js';

function fade(node, { delay = 0, duration = 400, easing = identity }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}

/* src/routes/travel.svelte generated by Svelte v3.20.1 */
const file = "src/routes/travel.svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let section;
	let t1;
	let div1;
	let div0;
	let h1;
	let t2;
	let h1_intro;
	let section_intro;
	let t3;
	let div2;
	let p0;
	let t4;
	let t5;
	let p1;
	let t6;
	let t7;
	let p2;
	let t8;
	let t9;
	let div3;
	let figure0;
	let img0;
	let img0_src_value;
	let t10;
	let div5;
	let div4;
	let h2;
	let t11;
	let t12;
	let p3;
	let t13;
	let t14;
	let div6;
	let figure1;
	let img1;
	let img1_src_value;
	let t15;
	let figure2;
	let img2;
	let img2_src_value;
	let t16;
	let figure3;
	let img3;
	let img3_src_value;
	let t17;
	let figure4;
	let img4;
	let img4_src_value;
	let t18;
	let current;
	document.title = title_value = /*destination*/ ctx[0];
	const truman = new Truman({ $$inline: true });
	const bonkers = new Bonkers({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			create_component(truman.$$.fragment);
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t2 = text(/*destination*/ ctx[0]);
			t3 = space();
			div2 = element("div");
			p0 = element("p");
			t4 = text("Buying the right telescope to take your love of astronomy to the next level is a big next step in the propsition");
			t5 = space();
			p1 = element("p");
			t6 = text("* * *");
			t7 = space();
			p2 = element("p");
			t8 = text("Andrea & Jeremy");
			t9 = space();
			div3 = element("div");
			figure0 = element("figure");
			img0 = element("img");
			t10 = space();
			div5 = element("div");
			div4 = element("div");
			h2 = element("h2");
			t11 = text("Aït Benhaddou");
			t12 = space();
			p3 = element("p");
			t13 = text("* * *");
			t14 = space();
			div6 = element("div");
			figure1 = element("figure");
			img1 = element("img");
			t15 = space();
			figure2 = element("figure");
			img2 = element("img");
			t16 = space();
			figure3 = element("figure");
			img3 = element("img");
			t17 = space();
			figure4 = element("figure");
			img4 = element("img");
			t18 = space();
			create_component(bonkers.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-wp5x8y\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			claim_component(truman.$$.fragment, section_nodes);
			t1 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, /*destination*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, "Buying the right telescope to take your love of astronomy to the next level is a big next step in the propsition");
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			p1 = claim_element(div2_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "* * *");
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			p2 = claim_element(div2_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, "Andrea & Jeremy");
			p2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			figure0 = claim_element(div3_nodes, "FIGURE", {});
			var figure0_nodes = children(figure0);
			img0 = claim_element(figure0_nodes, "IMG", { src: true, alt: true, class: true });
			figure0_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h2 = claim_element(div4_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t11 = claim_text(h2_nodes, "Aït Benhaddou");
			h2_nodes.forEach(detach_dev);
			t12 = claim_space(div4_nodes);
			p3 = claim_element(div4_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "* * *");
			p3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			figure1 = claim_element(div6_nodes, "FIGURE", {});
			var figure1_nodes = children(figure1);
			img1 = claim_element(figure1_nodes, "IMG", { alt: true, src: true, class: true });
			figure1_nodes.forEach(detach_dev);
			t15 = claim_space(div6_nodes);
			figure2 = claim_element(div6_nodes, "FIGURE", {});
			var figure2_nodes = children(figure2);
			img2 = claim_element(figure2_nodes, "IMG", { alt: true, src: true, class: true });
			figure2_nodes.forEach(detach_dev);
			t16 = claim_space(div6_nodes);
			figure3 = claim_element(div6_nodes, "FIGURE", {});
			var figure3_nodes = children(figure3);
			img3 = claim_element(figure3_nodes, "IMG", { alt: true, src: true, class: true });
			figure3_nodes.forEach(detach_dev);
			t17 = claim_space(div6_nodes);
			figure4 = claim_element(div6_nodes, "FIGURE", {});
			var figure4_nodes = children(figure4);
			img4 = claim_element(figure4_nodes, "IMG", { alt: true, src: true, class: true });
			figure4_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			claim_component(bonkers.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1abxzzq");
			add_location(h1, file, 68, 6, 1375);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 67, 4, 1345);
			attr_dev(div1, "class", "hero-body");
			add_location(div1, file, 66, 2, 1317);
			attr_dev(section, "class", "hero is-link is-fullheight svelte-1abxzzq");
			add_location(section, file, 62, 0, 1227);
			attr_dev(p0, "class", "svelte-1abxzzq");
			add_location(p0, file, 74, 2, 1493);
			attr_dev(p1, "class", "svelte-1abxzzq");
			add_location(p1, file, 75, 2, 1615);
			attr_dev(p2, "class", "svelte-1abxzzq");
			add_location(p2, file, 76, 2, 1630);
			attr_dev(div2, "class", "container blurb svelte-1abxzzq");
			add_location(div2, file, 73, 0, 1461);
			if (img0.src !== (img0_src_value = /*mank*/ ctx[1])) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "man dances.");
			attr_dev(img0, "class", "svelte-1abxzzq");
			add_location(img0, file, 80, 10, 1709);
			add_location(figure0, file, 80, 2, 1701);
			attr_dev(div3, "class", "container image-gallery svelte-1abxzzq");
			add_location(div3, file, 79, 0, 1661);
			attr_dev(h2, "class", "svelte-1abxzzq");
			add_location(h2, file, 85, 4, 1820);
			attr_dev(p3, "class", "svelte-1abxzzq");
			add_location(p3, file, 86, 4, 1847);
			attr_dev(div4, "class", "chapter-header svelte-1abxzzq");
			add_location(div4, file, 84, 2, 1787);
			attr_dev(div5, "class", "container");
			add_location(div5, file, 83, 0, 1761);
			attr_dev(img1, "alt", "handsome man");
			if (img1.src !== (img1_src_value = "images/aaa.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "class", "svelte-1abxzzq");
			add_location(img1, file, 91, 10, 1925);
			add_location(figure1, file, 91, 2, 1917);
			attr_dev(img2, "alt", "handsome man");
			if (img2.src !== (img2_src_value = "images/bbb.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "class", "svelte-1abxzzq");
			add_location(img2, file, 92, 10, 1990);
			add_location(figure2, file, 92, 2, 1982);
			attr_dev(img3, "alt", "handsome man");
			if (img3.src !== (img3_src_value = "images/ccc.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "class", "svelte-1abxzzq");
			add_location(img3, file, 93, 10, 2055);
			add_location(figure3, file, 93, 2, 2047);
			attr_dev(img4, "alt", "handsome man");
			if (img4.src !== (img4_src_value = "images/ddd.jpg")) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "class", "svelte-1abxzzq");
			add_location(img4, file, 94, 10, 2120);
			add_location(figure4, file, 94, 2, 2112);
			attr_dev(div6, "class", "container image-gallery svelte-1abxzzq");
			add_location(div6, file, 90, 0, 1877);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			mount_component(truman, section, null);
			append_dev(section, t1);
			append_dev(section, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, p0);
			append_dev(p0, t4);
			append_dev(div2, t5);
			append_dev(div2, p1);
			append_dev(p1, t6);
			append_dev(div2, t7);
			append_dev(div2, p2);
			append_dev(p2, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, figure0);
			append_dev(figure0, img0);
			insert_dev(target, t10, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, h2);
			append_dev(h2, t11);
			append_dev(div4, t12);
			append_dev(div4, p3);
			append_dev(p3, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, figure1);
			append_dev(figure1, img1);
			append_dev(div6, t15);
			append_dev(div6, figure2);
			append_dev(figure2, img2);
			append_dev(div6, t16);
			append_dev(div6, figure3);
			append_dev(figure3, img3);
			append_dev(div6, t17);
			append_dev(div6, figure4);
			append_dev(figure4, img4);
			insert_dev(target, t18, anchor);
			mount_component(bonkers, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*destination*/ 1) && title_value !== (title_value = /*destination*/ ctx[0])) {
				document.title = title_value;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(truman.$$.fragment, local);

			if (!h1_intro) {
				add_render_callback(() => {
					h1_intro = create_in_transition(h1, fade, { duration: 2000 });
					h1_intro.start();
				});
			}

			if (!section_intro) {
				add_render_callback(() => {
					section_intro = create_in_transition(section, fade, { duration: 500 });
					section_intro.start();
				});
			}

			transition_in(bonkers.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(truman.$$.fragment, local);
			transition_out(bonkers.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_component(truman);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(div5);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(div6);
			if (detaching) detach_dev(t18);
			destroy_component(bonkers, detaching);
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
	let visible = true;
	let destination = "Morocco";
	let mank = "images/bbb.jpg";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Travel> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Travel", $$slots, []);

	$$self.$capture_state = () => ({
		Bonkers,
		Truman,
		fade,
		visible,
		destination,
		mank
	});

	$$self.$inject_state = $$props => {
		if ("visible" in $$props) visible = $$props.visible;
		if ("destination" in $$props) $$invalidate(0, destination = $$props.destination);
		if ("mank" in $$props) $$invalidate(1, mank = $$props.mank);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [destination, mank];
}

class Travel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Travel",
			options,
			id: create_fragment.name
		});
	}
}

export default Travel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVsLmRiNDlhY2I0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3RyYW5zaXRpb24vaW5kZXgubWpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy90cmF2ZWwuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1YmljSW5PdXQsIGxpbmVhciwgY3ViaWNPdXQgfSBmcm9tICcuLi9lYXNpbmcnO1xuaW1wb3J0IHsgaXNfZnVuY3Rpb24sIGFzc2lnbiB9IGZyb20gJy4uL2ludGVybmFsJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5mdW5jdGlvbiBibHVyKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNJbk91dCwgYW1vdW50ID0gNSwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IGYgPSBzdHlsZS5maWx0ZXIgPT09ICdub25lJyA/ICcnIDogc3R5bGUuZmlsdGVyO1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IChfdCwgdSkgPT4gYG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX07IGZpbHRlcjogJHtmfSBibHVyKCR7dSAqIGFtb3VudH1weCk7YFxuICAgIH07XG59XG5mdW5jdGlvbiBmYWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gbGluZWFyIH0pIHtcbiAgICBjb25zdCBvID0gK2dldENvbXB1dGVkU3R5bGUobm9kZSkub3BhY2l0eTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiB0ID0+IGBvcGFjaXR5OiAke3QgKiBvfWBcbiAgICB9O1xufVxuZnVuY3Rpb24gZmx5KG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHggPSAwLCB5ID0gMCwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsaWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCBvcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpO1xuICAgIGNvbnN0IHBhZGRpbmdfdG9wID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKTtcbiAgICBjb25zdCBwYWRkaW5nX2JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgY29uc3QgbWFyZ2luX3RvcCA9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luVG9wKTtcbiAgICBjb25zdCBtYXJnaW5fYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgIGNvbnN0IGJvcmRlcl90b3Bfd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKTtcbiAgICBjb25zdCBib3JkZXJfYm90dG9tX3dpZHRoID0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICAgIGBvcGFjaXR5OiAke01hdGgubWluKHQgKiAyMCwgMSkgKiBvcGFjaXR5fTtgICtcbiAgICAgICAgICAgIGBoZWlnaHQ6ICR7dCAqIGhlaWdodH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLXRvcDogJHt0ICogcGFkZGluZ190b3B9cHg7YCArXG4gICAgICAgICAgICBgcGFkZGluZy1ib3R0b206ICR7dCAqIHBhZGRpbmdfYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYG1hcmdpbi10b3A6ICR7dCAqIG1hcmdpbl90b3B9cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLWJvdHRvbTogJHt0ICogbWFyZ2luX2JvdHRvbX1weDtgICtcbiAgICAgICAgICAgIGBib3JkZXItdG9wLXdpZHRoOiAke3QgKiBib3JkZXJfdG9wX3dpZHRofXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci1ib3R0b20td2lkdGg6ICR7dCAqIGJvcmRlcl9ib3R0b21fd2lkdGh9cHg7YFxuICAgIH07XG59XG5mdW5jdGlvbiBzY2FsZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCBzdGFydCA9IDAsIG9wYWNpdHkgPSAwIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHNkID0gMSAtIHN0YXJ0O1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IChfdCwgdSkgPT4gYFxuXHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gc2NhbGUoJHsxIC0gKHNkICogdSl9KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1cblx0XHRgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRyYXcobm9kZSwgeyBkZWxheSA9IDAsIHNwZWVkLCBkdXJhdGlvbiwgZWFzaW5nID0gY3ViaWNJbk91dCB9KSB7XG4gICAgY29uc3QgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gbGVuIC8gc3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24obGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBzdHJva2UtZGFzaGFycmF5OiAke3QgKiBsZW59ICR7dSAqIGxlbn1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmFkZShfYSkge1xuICAgIHZhciB7IGZhbGxiYWNrIH0gPSBfYSwgZGVmYXVsdHMgPSBfX3Jlc3QoX2EsIFtcImZhbGxiYWNrXCJdKTtcbiAgICBjb25zdCB0b19yZWNlaXZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHRvX3NlbmQgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gY3Jvc3NmYWRlKGZyb20sIG5vZGUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSBkID0+IE1hdGguc3FydChkKSAqIDMwLCBlYXNpbmcgPSBjdWJpY091dCB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGR4ID0gZnJvbS5sZWZ0IC0gdG8ubGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcbiAgICAgICAgY29uc3QgZHcgPSBmcm9tLndpZHRoIC8gdG8ud2lkdGg7XG4gICAgICAgIGNvbnN0IGRoID0gZnJvbS5oZWlnaHQgLyB0by5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHRcdG9wYWNpdHk6ICR7dCAqIG9wYWNpdHl9O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcblx0XHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCR7dSAqIGR5fXB4KSBzY2FsZSgke3QgKyAoMSAtIHQpICogZHd9LCAke3QgKyAoMSAtIHQpICogZGh9KTtcblx0XHRcdGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuICAgICAgICByZXR1cm4gKG5vZGUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc2V0KHBhcmFtcy5rZXksIHtcbiAgICAgICAgICAgICAgICByZWN0OiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJwYXJ0cy5oYXMocGFyYW1zLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWN0IH0gPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydHMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NmYWRlKHJlY3QsIG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4gd2Fzbid0IGNsYWltZWQgYnkgdGhlIG90aGVyIGxpc3QpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBuZWVkIHRvIHN1cHBseSBhbiBvdXRyb1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2sgJiYgZmFsbGJhY2sobm9kZSwgcGFyYW1zLCBpbnRybyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB0cmFuc2l0aW9uKHRvX3NlbmQsIHRvX3JlY2VpdmUsIGZhbHNlKSxcbiAgICAgICAgdHJhbnNpdGlvbih0b19yZWNlaXZlLCB0b19zZW5kLCB0cnVlKVxuICAgIF07XG59XG5cbmV4cG9ydCB7IGJsdXIsIGNyb3NzZmFkZSwgZHJhdywgZmFkZSwgZmx5LCBzY2FsZSwgc2xpZGUgfTtcbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBCb25rZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvQm9ua2Vycy5zdmVsdGUnO1xuICBpbXBvcnQgVHJ1bWFuIGZyb20gJy4uL2NvbXBvbmVudHMvVHJ1bWFuLnN2ZWx0ZSc7XG5cdGltcG9ydCB7IGZhZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdC8vIGltcG9ydCBpbWFnZXMgZnJvbSAnLi4vc3RhdGljL2ltYWdlcy5qc29uJztcblx0bGV0IHZpc2libGUgPSB0cnVlO1xuXHRsZXQgZGVzdGluYXRpb24gPSAnTW9yb2Njbyc7XG5cdGxldCBtYW5rID0gJ2ltYWdlcy9iYmIuanBnJztcbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBtZWRpYT1cInNjcmVlblwiIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuL3N0eWxlL3RoZW1lLnNjc3NcIjtcblx0aDEge1xuXHQgY29sb3I6IHdoaXRlO1xuXHR9XG4gIC5pbWFnZS1nYWxsZXJ5IGZpZ3VyZSBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA4cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5ibHVyYixcbiAgLmNoYXB0ZXItaGVhZGVyIHtcbiAgICBtYXJnaW46IDZyZW0gMTRyZW07XG4gIH1cbiAgLmJsdXJiIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGxpZ2h0Z3JleTtcblxuICB9XG4gIC5ibHVyYiBwOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jaGFwdGVyLWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9tb3JvY2NvLXRodW1iLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuPC9zdHlsZT5cblxuXG48IS0tIFBhZ2Ugc3RhcnRzIC0tPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57ZGVzdGluYXRpb259PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uIGluOmZhZGUgPVwie3sgZHVyYXRpb246IDUwMCB9fVwiIGNsYXNzPVwiaGVybyBpcy1saW5rIGlzLWZ1bGxoZWlnaHRcIj5cblxuPFRydW1hbi8+XG5cbiAgPGRpdiBjbGFzcz1cImhlcm8tYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBpbjpmYWRlPVwie3sgZHVyYXRpb246IDIwMDAgfX1cIj57ZGVzdGluYXRpb259PC9oMT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXIgYmx1cmJcIj5cbiAgPHA+QnV5aW5nIHRoZSByaWdodCB0ZWxlc2NvcGUgdG8gdGFrZSB5b3VyIGxvdmUgb2YgYXN0cm9ub215IHRvIHRoZSBuZXh0IGxldmVsIGlzIGEgYmlnIG5leHQgc3RlcCBpbiB0aGUgcHJvcHNpdGlvbjwvcD5cbiAgPHA+KiAqICo8L3A+XG4gIDxwPkFuZHJlYSAmIEplcmVteTwvcD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGltYWdlLWdhbGxlcnlcIj5cbiAgPGZpZ3VyZT48aW1nIHNyYz17bWFua30gYWx0PVwibWFuIGRhbmNlcy5cIj48L2ZpZ3VyZT5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJjaGFwdGVyLWhlYWRlclwiPlxuICAgIDxoMj5Bw690IEJlbmhhZGRvdTwvaDI+XG4gICAgPHA+KiAqICo8L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXIgaW1hZ2UtZ2FsbGVyeVwiPlxuICA8ZmlndXJlPjxpbWcgYWx0PSdoYW5kc29tZSBtYW4nIHNyYz0naW1hZ2VzL2FhYS5qcGcnPjwvZmlndXJlPlxuICA8ZmlndXJlPjxpbWcgYWx0PSdoYW5kc29tZSBtYW4nIHNyYz0naW1hZ2VzL2JiYi5qcGcnPjwvZmlndXJlPlxuICA8ZmlndXJlPjxpbWcgYWx0PSdoYW5kc29tZSBtYW4nIHNyYz0naW1hZ2VzL2NjYy5qcGcnPjwvZmlndXJlPlxuICA8ZmlndXJlPjxpbWcgYWx0PSdoYW5kc29tZSBtYW4nIHNyYz0naW1hZ2VzL2RkZC5qcGcnPjwvZmlndXJlPlxuPC9kaXY+XG5cbjxCb25rZXJzLz5cbiJdLCJuYW1lcyI6WyJsaW5lYXIiXSwibWFwcGluZ3MiOiI7OztBQTBDQSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHQSxRQUFNLEVBQUUsRUFBRTtBQUNwRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzlDLElBQUksT0FBTztBQUNYLFFBQVEsS0FBSztBQUNiLFFBQVEsUUFBUTtBQUNoQixRQUFRLE1BQU07QUFDZCxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLEtBQUssQ0FBQztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQ1NTLEdBQVc7Ozs7Ozs7Ozs7Ozs7NkJBU3NCLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FBWCxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQVlqQyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUdBckJmLEdBQVc7Ozs7Ozs7Ozs7aURBU0UsUUFBUSxFQUFFLElBQUk7Ozs7Ozs7MkRBTmQsUUFBUSxFQUFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXpEOUIsT0FBTyxHQUFHLElBQUk7S0FDZCxXQUFXLEdBQUcsU0FBUztLQUN2QixJQUFJLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
