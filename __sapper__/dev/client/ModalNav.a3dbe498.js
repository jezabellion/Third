import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as add_location, l as toggle_class, m as insert_dev, n as append_dev, o as listen_dev, p as noop } from './client.ae57c06b.js';

// Global
const destination = {
    home: 'Wanderlust',
    one: 'Morocco',
    two: 'Istanbul',
    three: 'Peru',
    four: 'Russia'
};

/* src/components/ModalNav.svelte generated by Svelte v3.20.1 */
const file = "src/components/ModalNav.svelte";

function create_fragment(ctx) {
	let div8;
	let div0;
	let t0;
	let div7;
	let div6;
	let div5;
	let div1;
	let a0;
	let t1_value = destination.one + "";
	let t1;
	let t2;
	let div2;
	let a1;
	let t3_value = destination.two + "";
	let t3;
	let t4;
	let div3;
	let a2;
	let t5_value = destination.three + "";
	let t5;
	let t6;
	let div4;
	let a3;
	let t7_value = destination.four + "";
	let t7;
	let t8;
	let button;
	let dispose;

	const block = {
		c: function create() {
			div8 = element("div");
			div0 = element("div");
			t0 = space();
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			div1 = element("div");
			a0 = element("a");
			t1 = text(t1_value);
			t2 = space();
			div2 = element("div");
			a1 = element("a");
			t3 = text(t3_value);
			t4 = space();
			div3 = element("div");
			a2 = element("a");
			t5 = text(t5_value);
			t6 = space();
			div4 = element("div");
			a3 = element("a");
			t7 = text(t7_value);
			t8 = space();
			button = element("button");
			this.h();
		},
		l: function claim(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div0 = claim_element(div8_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div1 = claim_element(div5_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, t1_value);
			a0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a1 = claim_element(div2_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t3 = claim_text(a1_nodes, t3_value);
			a1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a2 = claim_element(div3_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t5 = claim_text(a2_nodes, t5_value);
			a2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			a3 = claim_element(div4_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t7 = claim_text(a3_nodes, t7_value);
			a3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t8 = claim_space(div7_nodes);
			button = claim_element(div7_nodes, "BUTTON", { class: true, "aria-label": true });
			children(button).forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "modal-background");
			add_location(div0, file, 28, 2, 1350);
			attr_dev(a0, "href", "morocco");
			attr_dev(a0, "class", "svelte-3x636q");
			add_location(a0, file, 33, 12, 1536);
			attr_dev(div1, "class", "column");
			add_location(div1, file, 32, 10, 1503);
			attr_dev(a1, "href", "istanbul");
			attr_dev(a1, "class", "svelte-3x636q");
			add_location(a1, file, 36, 12, 1636);
			attr_dev(div2, "class", "column");
			add_location(div2, file, 35, 10, 1603);
			attr_dev(a2, "href", "peru");
			attr_dev(a2, "class", "svelte-3x636q");
			add_location(a2, file, 39, 12, 1737);
			attr_dev(div3, "class", "column");
			add_location(div3, file, 38, 10, 1704);
			attr_dev(a3, "href", "russia");
			attr_dev(a3, "class", "svelte-3x636q");
			add_location(a3, file, 42, 12, 1836);
			attr_dev(div4, "class", "column");
			add_location(div4, file, 41, 10, 1803);
			attr_dev(div5, "class", "columns has-text-centered");
			add_location(div5, file, 31, 8, 1453);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 30, 4, 1421);
			attr_dev(button, "class", "modal-close is-large");
			attr_dev(button, "aria-label", "close");
			add_location(button, file, 46, 6, 1927);
			attr_dev(div7, "class", "modal-content svelte-3x636q");
			add_location(div7, file, 29, 2, 1389);
			attr_dev(div8, "class", "modal is-clipped svelte-3x636q");
			toggle_class(div8, "is-active", /*showModal*/ ctx[0]);
			add_location(div8, file, 27, 0, 1289);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, div8, anchor);
			append_dev(div8, div0);
			append_dev(div8, t0);
			append_dev(div8, div7);
			append_dev(div7, div6);
			append_dev(div6, div5);
			append_dev(div5, div1);
			append_dev(div1, a0);
			append_dev(a0, t1);
			append_dev(div5, t2);
			append_dev(div5, div2);
			append_dev(div2, a1);
			append_dev(a1, t3);
			append_dev(div5, t4);
			append_dev(div5, div3);
			append_dev(div3, a2);
			append_dev(a2, t5);
			append_dev(div5, t6);
			append_dev(div5, div4);
			append_dev(div4, a3);
			append_dev(a3, t7);
			append_dev(div7, t8);
			append_dev(div7, button);
			if (remount) dispose();
			dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*showModal*/ 1) {
				toggle_class(div8, "is-active", /*showModal*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div8);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ModalNav> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ModalNav", $$slots, []);
	const click_handler = () => $$invalidate(0, showModal = false);

	$$self.$set = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	$$self.$capture_state = () => ({ destination, showModal });

	$$self.$inject_state = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showModal, click_handler];
}

class ModalNav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { showModal: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ModalNav",
			options,
			id: create_fragment.name
		});
	}

	get showModal() {
		throw new Error("<ModalNav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showModal(value) {
		throw new Error("<ModalNav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ModalNav as M, destination as d };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxOYXYuYTNkYmU0OTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGF0YS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsTmF2LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWxcbmV4cG9ydCBjb25zdCBkZXN0aW5hdGlvbiA9IHtcbiAgICBob21lOiAnV2FuZGVybHVzdCcsXG4gICAgb25lOiAnTW9yb2NjbycsXG4gICAgdHdvOiAnSXN0YW5idWwnLFxuICAgIHRocmVlOiAnUGVydScsXG4gICAgZm91cjogJ1J1c3NpYSdcbn07XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgeyBkZXN0aW5hdGlvbiB9IGZyb20gJy4uL3JvdXRlcy9kYXRhLmpzJztcbiAgZXhwb3J0IGxldCBzaG93TW9kYWwgPSBmYWxzZTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5tb2RhbCB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5tb2RhbCBhIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLm1vZGFsIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgfVxuICAvKiAubW9kYWwgLmlzLXNlbGVjdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xuICB9ICovXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzOmlzLWFjdGl2ZT17c2hvd01vZGFsfSBjbGFzcz1cIm1vZGFsIGlzLWNsaXBwZWRcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIm1vcm9jY29cIj57ZGVzdGluYXRpb24ub25lfTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaXN0YW5idWxcIj57ZGVzdGluYXRpb24udHdvfTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwicGVydVwiPntkZXN0aW5hdGlvbi50aHJlZX08L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInJ1c3NpYVwiPntkZXN0aW5hdGlvbi5mb3VyfTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb246Y2xpY2s9eygpID0+IHNob3dNb2RhbCA9IGZhbHNlfSBjbGFzcz1cIm1vZGFsLWNsb3NlIGlzLWxhcmdlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDWSxNQUFDLFdBQVcsR0FBRztBQUMzQixJQUFJLElBQUksRUFBRSxZQUFZO0FBQ3RCLElBQUksR0FBRyxFQUFFLFNBQVM7QUFDbEIsSUFBSSxHQUFHLEVBQUUsVUFBVTtBQUNuQixJQUFJLEtBQUssRUFBRSxNQUFNO0FBQ2pCLElBQUksSUFBSSxFQUFFLFFBQVE7QUFDbEI7Ozs7Ozs7Ozs7Ozs7O2dCQzBCK0IsV0FBVyxDQUFDLEdBQUc7Ozs7O2dCQUdkLFdBQVcsQ0FBQyxHQUFHOzs7OztnQkFHbkIsV0FBVyxDQUFDLEtBQUs7Ozs7O2dCQUdmLFdBQVcsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQWZ4QixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXpCbEIsU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7Ozs2Q0E0Q0EsU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
