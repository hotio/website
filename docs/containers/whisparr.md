---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13599" onclick="CopyToClipboard('tag13599');return false;" class="tag-decoration">v2</div><div id="tag10683" onclick="CopyToClipboard('tag10683');return false;" class="tag-decoration">v2-32251ac</div><div id="tag27650" onclick="CopyToClipboard('tag27650');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/32251ace25aed3e99d39c239f18a222294f6fbc9" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246784120" target="_blank">2026-01-22 11:30:03</a></td></tr>
<tr><td><div id="tag17054" onclick="CopyToClipboard('tag17054');return false;" class="tag-decoration">v3</div><div id="tag9870" onclick="CopyToClipboard('tag9870');return false;" class="tag-decoration">v3-0a3bb67</div><div id="tag8492" onclick="CopyToClipboard('tag8492');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag6250" onclick="CopyToClipboard('tag6250');return false;" class="tag-decoration">v3-v3</div><div id="tag3180" onclick="CopyToClipboard('tag3180');return false;" class="tag-decoration">v3-v3.2</div><div id="tag5686" onclick="CopyToClipboard('tag5686');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a3bb67db3367480c85bce1ce5fb0394165a0a48" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21244741241" target="_blank">2026-01-22 10:20:32</a></td></tr>
<tr><td><div id="tag2111" onclick="CopyToClipboard('tag2111');return false;" class="tag-decoration">v3-develop</div><div id="tag11109" onclick="CopyToClipboard('tag11109');return false;" class="tag-decoration">v3-develop-c383105</div><div id="tag2717" onclick="CopyToClipboard('tag2717');return false;" class="tag-decoration">v3-develop-3.2.1-develop.74</div><div id="tag21427" onclick="CopyToClipboard('tag21427');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14530" onclick="CopyToClipboard('tag14530');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag5216" onclick="CopyToClipboard('tag5216');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c38310580ada7778f4188a098f61efbe24ccb361" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246784366" target="_blank">2026-01-22 11:30:05</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
