import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, h as claim_text, f as detach_dev, g as claim_space, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, E as set_data_dev, p as noop } from './client.1a2d5c3c.js';

// Travel Page Data
// Morocco

const copy = {
  blurb: 'A wild rolling road trip across Morocco, nine days, 3400Km. From the snowy atlas mountains to the mouth of the Sahara',
  travelers: 'Andrea & Jeremy',
  date: '2018',
  farewell: 'Merci beaucoup Morocco!'
};

const chapter = {
      one: 'Aït Benhaddou',
      two: 'Erg Chebbi',
      three: 'Ouarzazate'
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
      { src: 'images/morocco/IMG_758CCCE68AFA-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_758CCCE68AFA-6.jpeg', alt: 'new' }
    ],
    // Empty
    four: [
      { src: 'images/morocco/IMG_0B4A7FBD5D2C-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0B4A7FBD5D2C-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0B4A7FBD5D2C-2.jpeg', alt: 'new' }
    ],
    // Mosque
    five: [
      { src: 'images/morocco/IMG_BA1EE5C061F8-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_BA1EE5C061F8-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_BA1EE5C061F8-4.jpeg', alt: 'new' }
      // { src: 'images/morocco/IMG_BA1EE5C061F8-3.jpeg', alt: 'new' }
    ],
    // valley
    six: [
      { src: 'images/morocco/IMG_0852E891A202-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-6.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_0852E891A202-4.jpeg', alt: 'new' }
    ],
    // wild town
    seven: [
      { src: 'images/morocco/IMG_F397C50B4C57-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_F397C50B4C57-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_F397C50B4C57-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_F397C50B4C57-4.jpeg', alt: 'new' }
    ],
    // wild coutry
    eight: [
      { src: 'images/morocco/IMG_83B95BE9F1B8-4.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-9.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-8.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-6.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-1.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-5.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-3.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-2.jpeg', alt: 'new' },
      { src: 'images/morocco/IMG_83B95BE9F1B8-7.jpeg', alt: 'new' }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckhlYWRlci5mMTZhYTY0OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHJhdmVsIFBhZ2UgRGF0YVxuLy8gTW9yb2Njb1xuXG5leHBvcnQgY29uc3QgY29weSA9IHtcbiAgYmx1cmI6ICdBIHdpbGQgcm9sbGluZyByb2FkIHRyaXAgYWNyb3NzIE1vcm9jY28sIG5pbmUgZGF5cywgMzQwMEttLiBGcm9tIHRoZSBzbm93eSBhdGxhcyBtb3VudGFpbnMgdG8gdGhlIG1vdXRoIG9mIHRoZSBTYWhhcmEnLFxuICB0cmF2ZWxlcnM6ICdBbmRyZWEgJiBKZXJlbXknLFxuICBkYXRlOiAnMjAxOCcsXG4gIGZhcmV3ZWxsOiAnTWVyY2kgYmVhdWNvdXAgTW9yb2NjbyEnXG59XG5cbmV4cG9ydCBjb25zdCBjaGFwdGVyID0ge1xuICAgICAgb25lOiAnQcOvdCBCZW5oYWRkb3UnLFxuICAgICAgdHdvOiAnRXJnIENoZWJiaScsXG4gICAgICB0aHJlZTogJ091YXJ6YXphdGUnXG4gICAgfVxuXG5leHBvcnQgY29uc3QgcGhvdG9zID0ge1xuICAgb25lOiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BRUYzMzNFMjZDMTUtMS5qcGVnJywgYWx0OiAneXVwJyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQUVGMzMzRTI2QzE1LTIuanBlZycsIGFsdDogJ3doYXRldmVyJ31cbiAgICBdLFxuXG4gICAgdHdvOiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BMDlBRjBERUVFQkMtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTA5QUYwREVFRUJDLTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0EwOUFGMERFRUVCQy01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BMDlBRjBERUVFQkMtNC5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTA5QUYwREVFRUJDLTIuanBlZycsIGFsdDogJ25ldycgfVxuICAgIF0sXG4gICAgLy8gQWl0XG4gICAgdGhyZWU6IFtcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzc1OENDQ0U2OEFGQS01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR183NThDQ0NFNjhBRkEtMi5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfNzU4Q0NDRTY4QUZBLTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzc1OENDQ0U2OEFGQS00LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR183NThDQ0NFNjhBRkEtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfNzU4Q0NDRTY4QUZBLTYuanBlZycsIGFsdDogJ25ldycgfVxuICAgIF0sXG4gICAgLy8gRW1wdHlcbiAgICBmb3VyOiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR18wQjRBN0ZCRDVEMkMtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfMEI0QTdGQkQ1RDJDLTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzBCNEE3RkJENUQyQy0yLmpwZWcnLCBhbHQ6ICduZXcnIH1cbiAgICBdLFxuICAgIC8vIE1vc3F1ZVxuICAgIGZpdmU6IFtcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0JBMUVFNUMwNjFGOC01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19CQTFFRTVDMDYxRjgtMS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQkExRUU1QzA2MUY4LTQuanBlZycsIGFsdDogJ25ldycgfVxuICAgICAgLy8geyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQkExRUU1QzA2MUY4LTMuanBlZycsIGFsdDogJ25ldycgfVxuICAgIF0sXG4gICAgLy8gdmFsbGV5XG4gICAgc2l4OiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR18wODUyRTg5MUEyMDItMS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfMDg1MkU4OTFBMjAyLTIuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzA4NTJFODkxQTIwMi0zLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR18wODUyRTg5MUEyMDItNS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfMDg1MkU4OTFBMjAyLTYuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzA4NTJFODkxQTIwMi00LmpwZWcnLCBhbHQ6ICduZXcnIH1cbiAgICBdLFxuICAgIC8vIHdpbGQgdG93blxuICAgIHNldmVuOiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19GMzk3QzUwQjRDNTctMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfRjM5N0M1MEI0QzU3LTIuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0YzOTdDNTBCNEM1Ny0xLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19GMzk3QzUwQjRDNTctNC5qcGVnJywgYWx0OiAnbmV3JyB9XG4gICAgXSxcbiAgICAvLyB3aWxkIGNvdXRyeVxuICAgIGVpZ2h0OiBbXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR184M0I5NUJFOUYxQjgtNC5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfODNCOTVCRTlGMUI4LTkuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzgzQjk1QkU5RjFCOC04LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR184M0I5NUJFOUYxQjgtNi5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfODNCOTVCRTlGMUI4LTEuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzgzQjk1QkU5RjFCOC01LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR184M0I5NUJFOUYxQjgtMy5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfODNCOTVCRTlGMUI4LTIuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HXzgzQjk1QkU5RjFCOC03LmpwZWcnLCBhbHQ6ICduZXcnIH1cbiAgICBdLFxuICAgIC8vIGRlc2VydFxuICAgICAgbmluZTogW1xuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktOC5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktMi5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktNC5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktNi5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktOS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktMS5qcGVnJywgYWx0OiAnbmV3JyB9LFxuICAgICAgICB7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BOTQyQUVDQUNCMjktMTAuanBlZycsIGFsdDogJ25ldycgfSxcbiAgICAgICAgeyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfQTk0MkFFQ0FDQjI5LTExLmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0E5NDJBRUNBQ0IyOS03LmpwZWcnLCBhbHQ6ICduZXcnIH0sXG4gICAgICAgIHsgc3JjOiAnaW1hZ2VzL21vcm9jY28vSU1HX0E5NDJBRUNBQ0IyOS0zLmpwZWcnLCBhbHQ6ICduZXcnIH1cbiAgICAgIF1cbn07XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjaGFwdGVyIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRleHBvcnQgbGV0IHRpdGxlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBtZWRpYT1cInNjcmVlblwiIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuL3N0eWxlL3RoZW1lLnNjc3NcIjtcblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5jaGFwdGVyLWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5jaGFwdGVyLWhlYWRlciB7XG4gICAgbWFyZ2luOiA2cmVtIDE0cmVtO1xuICB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuXHQuY2hhcHRlci1oZWFkZXIge1xuXHRcdG1hcmdpbjogNXJlbSAxcmVtO1xuXHR9XG5cdC5jaGFwdGVyLWhlYWRlciBoMiB7XG5cdFx0Zm9udC1zaXplOiAzcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAzcmVtO1xuXHR9XG5cdC5jaGFwdGVyLWhlYWRlciBwOm50aC1jaGlsZCgyKSB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdH1cbn1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNoYXB0ZXItaGVhZGVyXCI+XG4gICAgPGgyPnt0aXRsZX08L2gyPlxuICAgIDxwPiogKiAqPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ1ksTUFBQyxJQUFJLEdBQUc7QUFDcEIsRUFBRSxLQUFLLEVBQUUsdUhBQXVIO0FBQ2hJLEVBQUUsU0FBUyxFQUFFLGlCQUFpQjtBQUM5QixFQUFFLElBQUksRUFBRSxNQUFNO0FBQ2QsRUFBRSxRQUFRLEVBQUUseUJBQXlCO0FBQ3JDLEVBQUM7QUFDRDtBQUNZLE1BQUMsT0FBTyxHQUFHO0FBQ3ZCLE1BQU0sR0FBRyxFQUFFLGVBQWU7QUFDMUIsTUFBTSxHQUFHLEVBQUUsWUFBWTtBQUN2QixNQUFNLEtBQUssRUFBRSxZQUFZO0FBQ3pCLE1BQUs7QUFDTDtBQUNZLE1BQUMsTUFBTSxHQUFHO0FBQ3RCLEdBQUcsR0FBRyxFQUFFO0FBQ1IsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUN2RSxLQUFLO0FBQ0w7QUFDQSxJQUFJLEdBQUcsRUFBRTtBQUNULE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsS0FBSztBQUNMO0FBQ0EsSUFBSSxLQUFLLEVBQUU7QUFDWCxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksRUFBRTtBQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxFQUFFO0FBQ1YsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLEdBQUcsRUFBRTtBQUNULE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxFQUFFO0FBQ1gsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxFQUFFO0FBQ1gsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsTUFBTSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ25FLE1BQU0sRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkUsS0FBSztBQUNMO0FBQ0EsTUFBTSxJQUFJLEVBQUU7QUFDWixRQUFRLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDckUsUUFBUSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JFLFFBQVEsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRSxRQUFRLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDckUsUUFBUSxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JFLFFBQVEsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRSxRQUFRLEVBQUUsR0FBRyxFQUFFLHlDQUF5QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDdEUsUUFBUSxFQUFFLEdBQUcsRUFBRSx5Q0FBeUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3RFLFFBQVEsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRSxRQUFRLEVBQUUsR0FBRyxFQUFFLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDckUsT0FBTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQzVEUyxHQUFLOzs7Ozs7Ozs7Ozs7O3VDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BOUJGLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
