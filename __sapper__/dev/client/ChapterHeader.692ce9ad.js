import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, h as claim_text, f as detach_dev, g as claim_space, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, D as set_data_dev, p as noop } from './client.d9be2c5e.js';

// Travel Page Data
// Morocco

// export const backgroundHero = 'url(../images/morocco-thumb.jpg);'

const copy = {
  blurb: 'New new new shoes mane man to take your love of astronomy to the next level is a big next step in the propsition',
  travelers: 'Andrea & Jeremy',
  farewell: 'Merci beaucoup Morocco!'
};

const chapter = {
      one: 'Aït Benhaddou',
      two: 'Erg Chebbi'
    };

const photos = {
   one: [
      { src: 'images/morocco/IMG_AEF333E26C15-1.jpeg', alt: 'yup' },
      { src: 'images/morocco/IMG_AEF333E26C15-2.jpeg', alt: 'whatever'}
    ],

    two: [
      { src: 'images/morocco/IMG_A09AF0DEEEBC-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_A09AF0DEEEBC-2.jpeg', alt: 'new' }
    ],
    // Ait
    three: [
      { src: 'images/morocco/IMG_758CCCE68AFA-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-6.jpeg', alt: 'new' }
    ],
    // Empty
    four: [
      { src: 'images/morocco/IMG_0B4A7FBD5D2C-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0B4A7FBD5D2C-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0B4A7FBD5D2C-1.jpeg', alt: 'new' }
    ],
    // Mosque
    five: [
      { src: 'images/morocco/IMG_BA1EE5C061F8-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_BA1EE5C061F8-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_BA1EE5C061F8-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_BA1EE5C061F8-3.jpeg', alt: 'new' }
    ],
    // valley
    six: [
      { src: 'images/morocco/IMG_0852E891A202-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-6.jpeg', alt: 'new' }
    ],
    // wild town
    seven: [
      { src: 'images/morocco/IMG_F397C50B4C57-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_F397C50B4C57-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_F397C50B4C57-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_F397C50B4C57-4.jpeg', alt: 'new' }
    ],
    // wild coutry
    eight: [
      { src: 'images/morocco/IMG_83B95BE9F1B8-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-6.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-6.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-8.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-9.jpeg', alt: 'new' }
    ],
    // desert
      nine: [
        { src: 'images/morocco/IMG_A942AECACB29-8.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-2.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-4.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-6.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-9.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-1.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-10.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-11.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-7.jpeg', alt: 'new' },
        { src: 'images/morocco/IMG_A942AECACB29-3.jpeg', alt: 'new' }
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

export { ChapterHeader as C, chapter as a, copy as c, photos as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckhlYWRlci42OTJjZTlhZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHJhdmVsIFBhZ2UgRGF0YVxuLy8gTW9yb2Njb1xuXG4vLyBleHBvcnQgY29uc3QgYmFja2dyb3VuZEhlcm8gPSAndXJsKC4uL2ltYWdlcy9tb3JvY2NvLXRodW1iLmpwZyk7J1xuXG5leHBvcnQgY29uc3QgY29weSA9IHtcbiAgYmx1cmI6ICdOZXcgbmV3IG5ldyBzaG9lcyBtYW5lIG1hbiB0byB0YWtlIHlvdXIgbG92ZSBvZiBhc3Ryb25vbXkgdG8gdGhlIG5leHQgbGV2ZWwgaXMgYSBiaWcgbmV4dCBzdGVwIGluIHRoZSBwcm9wc2l0aW9uJyxcbiAgdHJhdmVsZXJzOiAnQW5kcmVhICYgSmVyZW15JyxcbiAgZmFyZXdlbGw6ICdNZXJjaSBiZWF1Y291cCBNb3JvY2NvISdcbn1cblxuZXhwb3J0IGNvbnN0IGNoYXB0ZXIgPSB7XG4gICAgICBvbmU6ICdBw690IEJlbmhhZGRvdScsXG4gICAgICB0d286ICdFcmcgQ2hlYmJpJ1xuICAgIH1cblxuZXhwb3J0IGNvbnN0IHBob3RvcyA9IHtcbiAgIG9uZTogW1xuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQUVGMzMzRTI2QzE1LTEuanBlZycsIGFsdDogJ3l1cCcgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0FFRjMzM0UyNkMxNS0yLmpwZWcnLCBhbHQ6ICd3aGF0ZXZlcid9XG4gICAgXSxcblxuICAgIHR3bzogW1xuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTA5QUYwREVFRUJDLTMuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0EwOUFGMERFRUVCQy0xLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BMDlBRjBERUVFQkMtNS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTA5QUYwREVFRUJDLTQuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0EwOUFGMERFRUVCQy0yLmpwZWcnLCBhbHQ6ICduZXcnIH1cbiAgICBdLFxuICAgIC8vIEFpdFxuICAgIHRocmVlOiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR183NThDQ0NFNjhBRkEtNS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfNzU4Q0NDRTY4QUZBLTQuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzc1OENDQ0U2OEFGQS0yLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR183NThDQ0NFNjhBRkEtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfNzU4Q0NDRTY4QUZBLTYuanBlZycsIGFsdDogJ25ldycgfVxuICAgIF0sXG4gICAgLy8gRW1wdHlcbiAgICBmb3VyOiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR18wQjRBN0ZCRDVEMkMtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfMEI0QTdGQkQ1RDJDLTIuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzBCNEE3RkJENUQyQy0xLmpwZWcnLCBhbHQ6ICduZXcnIH1cbiAgICBdLFxuICAgIC8vIE1vc3F1ZVxuICAgIGZpdmU6IFtcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0JBMUVFNUMwNjFGOC01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19CQTFFRTVDMDYxRjgtNC5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQkExRUU1QzA2MUY4LTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0JBMUVFNUMwNjFGOC0zLmpwZWcnLCBhbHQ6ICduZXcnIH1cbiAgICBdLFxuICAgIC8vIHZhbGxleVxuICAgIHNpeDogW1xuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfMDg1MkU4OTFBMjAyLTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzA4NTJFODkxQTIwMi0yLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR18wODUyRTg5MUEyMDItMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfMDg1MkU4OTFBMjAyLTQuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzA4NTJFODkxQTIwMi01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR18wODUyRTg5MUEyMDItNi5qcGVnJywgYWx0OiAnbmV3JyB9XG4gICAgXSxcbiAgICAvLyB3aWxkIHRvd25cbiAgICBzZXZlbjogW1xuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfRjM5N0M1MEI0QzU3LTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0YzOTdDNTBCNEM1Ny0yLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19GMzk3QzUwQjRDNTctMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfRjM5N0M1MEI0QzU3LTQuanBlZycsIGFsdDogJ25ldycgfVxuICAgIF0sXG4gICAgLy8gd2lsZCBjb3V0cnlcbiAgICBlaWdodDogW1xuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfODNCOTVCRTlGMUI4LTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzgzQjk1QkU5RjFCOC0yLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR184M0I5NUJFOUYxQjgtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfODNCOTVCRTlGMUI4LTQuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzgzQjk1QkU5RjFCOC01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR184M0I5NUJFOUYxQjgtNi5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfODNCOTVCRTlGMUI4LTYuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzgzQjk1QkU5RjFCOC04LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR184M0I5NUJFOUYxQjgtOS5qcGVnJywgYWx0OiAnbmV3JyB9XG4gICAgXSxcbiAgICAvLyBkZXNlcnRcbiAgICAgIG5pbmU6IFtcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTguanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTIuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTQuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTYuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTkuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTEwLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0E5NDJBRUNBQ0IyOS0xMS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktNy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktMy5qcGVnJywgYWx0OiAnbmV3JyB9XG4gICAgICBdXG59O1xuIiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgY2hhcHRlciB9IGZyb20gJy4uL3JvdXRlcy9tb3JvY2NvLmpzJztcblx0ZXhwb3J0IGxldCB0aXRsZTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbWVkaWE9XCJzY3JlZW5cIiBsYW5nPVwic2Nzc1wiPlxuXHRAaW1wb3J0IFwiLi9zdHlsZS90aGVtZS5zY3NzXCI7XG5cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGxpZ2h0Z3JleTtcbiAgfVxuICAuY2hhcHRlci1oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGxpZ2h0Z3JleTtcbiAgfVxuICAuY2hhcHRlci1oZWFkZXIge1xuICAgIG1hcmdpbjogNnJlbSAxNHJlbTtcbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0LmNoYXB0ZXItaGVhZGVyIHtcblx0XHRtYXJnaW46IDVyZW0gMXJlbTtcblx0fVxuXHQuY2hhcHRlci1oZWFkZXIgaDIge1xuXHRcdGZvbnQtc2l6ZTogM3JlbTtcblx0XHRsaW5lLWhlaWdodDogM3JlbTtcblx0fVxuXHQuY2hhcHRlci1oZWFkZXIgcDpudGgtY2hpbGQoMikge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG59XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJjaGFwdGVyLWhlYWRlclwiPlxuICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICA8cD4qICogKjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWSxNQUFDLElBQUksR0FBRztBQUNwQixFQUFFLEtBQUssRUFBRSxrSEFBa0g7QUFDM0gsRUFBRSxTQUFTLEVBQUUsaUJBQWlCO0FBQzlCLEVBQUUsUUFBUSxFQUFFLHlCQUF5QjtBQUNyQyxFQUFDO0FBQ0Q7QUFDWSxNQUFDLE9BQU8sR0FBRztBQUN2QixNQUFNLEdBQUcsRUFBRSxlQUFlO0FBQzFCLE1BQU0sR0FBRyxFQUFFLFlBQVk7QUFDdkIsTUFBSztBQUNMO0FBQ1ksTUFBQyxNQUFNLEdBQUc7QUFDdEIsR0FBRyxHQUFHLEVBQUU7QUFDUixNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLElBQUksR0FBRyxFQUFFO0FBQ1QsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxLQUFLO0FBQ0w7QUFDQSxJQUFJLEtBQUssRUFBRTtBQUNYLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEVBQUU7QUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksRUFBRTtBQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxLQUFLO0FBQ0w7QUFDQSxJQUFJLEdBQUcsRUFBRTtBQUNULE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxFQUFFO0FBQ1gsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxFQUFFO0FBQ1gsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsS0FBSztBQUNMO0FBQ0EsTUFBTSxJQUFJLEVBQUU7QUFDWixRQUFRLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDckUsUUFBUSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JFLFFBQVEsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRSxRQUFRLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDckUsUUFBUSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JFLFFBQVEsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRSxRQUFRLEVBQUUsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDdEUsUUFBUSxFQUFFLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3RFLFFBQVEsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRSxRQUFRLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDckUsT0FBTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQzNEUyxHQUFLOzs7Ozs7Ozs7Ozs7O3VDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BOUJGLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
