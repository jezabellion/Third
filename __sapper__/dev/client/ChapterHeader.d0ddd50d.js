import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, h as claim_text, f as detach_dev, g as claim_space, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, E as set_data_dev, p as noop } from './client.08af54dc.js';

// Travel Page Data
// Morocco

const backgroundHero = 'url(../images/morocco-thumb.jpg);';

const copy = {
  blurb: 'New new new shoes mane man to take your love of astronomy to the next level is a big next step in the propsition',
  farewell: 'Merci beaucoup Morocco!'
};

const chapter = {
      one: 'Aït Benhaddou',
      two: 'Erg Chebbi'
    };

const photos = {
   one: [
      { src: 'images/morocco/IMG_AEF333E26C15-1.jpeg', alt: 'yup' },
      { src: 'images/morocco/IMG_6E31F46CF07B-3.jpg', alt: 'whatever'}
    ],

    two: [
      { src: 'images/morocco/IMG_A09AF0DEEEBC-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-2.jpeg', alt: 'new' }
    ],
    three: [
      { src: 'images/morocco/IMG_758CCCE68AFA-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-6.jpeg', alt: 'new' }
    ]
};

/* src/components/ChapterHeader.svelte generated by Svelte v3.20.1 */
const file = "src/components/ChapterHeader.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			p = element("p");
			t2 = text("* * *");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, /*title*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "* * *");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-hn3gka");
			add_location(h2, file, 32, 4, 721);
			attr_dev(p, "class", "svelte-hn3gka");
			add_location(p, file, 33, 4, 742);
			attr_dev(div0, "class", "chapter-header svelte-hn3gka");
			add_location(div0, file, 31, 2, 688);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 30, 0, 662);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
	let { title } = $$props;
	const writable_props = ["title"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ChapterHeader> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ChapterHeader", $$slots, []);

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
	};

	$$self.$capture_state = () => ({ chapter, title });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title];
}

class ChapterHeader extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ChapterHeader",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*title*/ ctx[0] === undefined && !("title" in props)) {
			console.warn("<ChapterHeader> was created without expected prop 'title'");
		}
	}

	get title() {
		throw new Error("<ChapterHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<ChapterHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ChapterHeader as C, chapter as a, backgroundHero as b, copy as c, photos as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckhlYWRlci5kMGRkZDUwZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHJhdmVsIFBhZ2UgRGF0YVxuLy8gTW9yb2Njb1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZEhlcm8gPSAndXJsKC4uL2ltYWdlcy9tb3JvY2NvLXRodW1iLmpwZyk7J1xuXG5leHBvcnQgY29uc3QgY29weSA9IHtcbiAgYmx1cmI6ICdOZXcgbmV3IG5ldyBzaG9lcyBtYW5lIG1hbiB0byB0YWtlIHlvdXIgbG92ZSBvZiBhc3Ryb25vbXkgdG8gdGhlIG5leHQgbGV2ZWwgaXMgYSBiaWcgbmV4dCBzdGVwIGluIHRoZSBwcm9wc2l0aW9uJyxcbiAgZmFyZXdlbGw6ICdNZXJjaSBiZWF1Y291cCBNb3JvY2NvISdcbn1cblxuZXhwb3J0IGNvbnN0IGNoYXB0ZXIgPSB7XG4gICAgICBvbmU6ICdBw690IEJlbmhhZGRvdScsXG4gICAgICB0d286ICdFcmcgQ2hlYmJpJ1xuICAgIH1cblxuZXhwb3J0IGNvbnN0IHBob3RvcyA9IHtcbiAgIG9uZTogW1xuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQUVGMzMzRTI2QzE1LTEuanBlZycsIGFsdDogJ3l1cCcgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzZFMzFGNDZDRjA3Qi0zLmpwZycsIGFsdDogJ3doYXRldmVyJ31cbiAgICBdLFxuXG4gICAgdHdvOiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BMDlBRjBERUVFQkMtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTA5QUYwREVFRUJDLTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0EwOUFGMERFRUVCQy01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BMDlBRjBERUVFQkMtNC5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTA5QUYwREVFRUJDLTIuanBlZycsIGFsdDogJ25ldycgfVxuICAgIF0sXG4gICAgdGhyZWU6IFtcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzc1OENDQ0U2OEFGQS0yLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR183NThDQ0NFNjhBRkEtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfNzU4Q0NDRTY4QUZBLTQuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzc1OENDQ0U2OEFGQS01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR183NThDQ0NFNjhBRkEtNi5qcGVnJywgYWx0OiAnbmV3JyB9XG4gICAgXVxufTtcbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGNoYXB0ZXIgfSBmcm9tICcuLi9yb3V0ZXMvbW9yb2Njby5qcyc7XG5cdGV4cG9ydCBsZXQgdGl0bGU7XG48L3NjcmlwdD5cblxuPHN0eWxlIG1lZGlhPVwic2NyZWVuXCIgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4vc3R5bGUvdGhlbWUuc2Nzc1wiO1xuXG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogJ0VuZ2FnZW1lbnQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRsaWdodGdyZXk7XG4gIH1cbiAgLmNoYXB0ZXItaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRsaWdodGdyZXk7XG4gIH1cbiAgLmNoYXB0ZXItaGVhZGVyIHtcbiAgICBtYXJnaW46IDZyZW0gMTRyZW07XG4gIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG5cdC5jaGFwdGVyLWhlYWRlciB7XG5cdFx0bWFyZ2luOiA1cmVtIDFyZW07XG5cdH1cblx0LmNoYXB0ZXItaGVhZGVyIGgyIHtcblx0XHRmb250LXNpemU6IDNyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDNyZW07XG5cdH1cblx0LmNoYXB0ZXItaGVhZGVyIHA6bnRoLWNoaWxkKDIpIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxufVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiY2hhcHRlci1oZWFkZXJcIj5cbiAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgPHA+KiAqICo8L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDWSxNQUFDLGNBQWMsR0FBRyxvQ0FBbUM7QUFDakU7QUFDWSxNQUFDLElBQUksR0FBRztBQUNwQixFQUFFLEtBQUssRUFBRSxrSEFBa0g7QUFDM0gsRUFBRSxRQUFRLEVBQUUseUJBQXlCO0FBQ3JDLEVBQUM7QUFDRDtBQUNZLE1BQUMsT0FBTyxHQUFHO0FBQ3ZCLE1BQU0sR0FBRyxFQUFFLGVBQWU7QUFDMUIsTUFBTSxHQUFHLEVBQUUsWUFBWTtBQUN2QixNQUFLO0FBQ0w7QUFDWSxNQUFDLE1BQU0sR0FBRztBQUN0QixHQUFHLEdBQUcsRUFBRTtBQUNSLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUM7QUFDdEUsS0FBSztBQUNMO0FBQ0EsSUFBSSxHQUFHLEVBQUU7QUFDVCxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRTtBQUNYLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQ0hTLEdBQUs7Ozs7Ozs7Ozs7Ozs7dUNBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E5QkYsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==