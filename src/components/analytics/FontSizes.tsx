/** @jsx jsx */
import CSS from 'csstype';
import uniq from 'lodash.uniq';
import { jsx } from 'theme-ui';

import { Div, SectionTitle, Text } from '../../layout/';
import sort from '../../util/cssSortUnits';

interface FontSizesProps {
    fontSizes: CSS.FontSizeProperty<string>[];
}

const FontSizes: React.FC<FontSizesProps> = ({ fontSizes = [] }) => (
    <Div
        sx={{ mt: 5 }}
        style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
        <SectionTitle
            title="Type Scale"
            description={`${uniq(fontSizes).length} Unique font sizes`}
        />

        {sort(uniq(fontSizes)).map(fontSize => (
            <div
                key={fontSize}
                sx={{ borderBottom: '1px solid', borderColor: 'gray', py: 3 }}
            >
                <Text sx={{ fontSize: 1, mb: 0, fontWeight: 500 }}>{fontSize}</Text>
                <Text
                    key={fontSize}
                    sx={{ fontWeight: 700 }}
                    style={{ fontSize, whiteSpace: 'nowrap' }}
                    children="Quick brown fox jumped"
                />
            </div>
        ))}
        <SectionTitle
            sx={{ mt: 5 }}
            title={`${fontSizes.length} Total font size declarations`}
        />
        <div
            style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                paddingBottom: 16,
            }}
        >
            <table cellSpacing="0" cellPadding="0">
                <tr>
                    {sort(fontSizes).map(fontSize => (
                        <td
                            key={fontSize}
                            style={{
                                fontSize,
                            }}
                            sx={{
                                textAlign: 'center',
                                fontWeight: 700,
                                verticalAlign: 'bottom',
                                lineHeight: 0.75,
                                px: 1,
                                pb: 2,
                                borderLeft: '1px solid',
                                borderBottom: '1px solid',
                                borderColor: 'gray',
                            }}
                            children="A"
                        />
                    ))}
                </tr>
                <tr>
                    {sort(fontSizes).map(fontSize => (
                        <td
                            key={fontSize}
                            style={{
                                textAlign: 'center',
                                fontWeight: 400,
                                verticalAlign: 'bottom',
                                fontSize: 12,
                                paddingLeft: 4,
                                paddingRight: 4,
                                paddingTop: 4,
                                borderLeft: '1px solid',
                                borderColor: 'gray',
                            }}
                            children={fontSize}
                        />
                    ))}
                </tr>
            </table>
        </div>
    </Div>
);

export default FontSizes;
