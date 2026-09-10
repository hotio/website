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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2019" onclick="CopyToClipboard('tag2019');return false;" class="tag-decoration">v2</div><div id="tag32326" onclick="CopyToClipboard('tag32326');return false;" class="tag-decoration">v2-f33c362</div><div id="tag11971" onclick="CopyToClipboard('tag11971');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag6203" onclick="CopyToClipboard('tag6203');return false;" class="tag-decoration">v2-v2</div><div id="tag22067" onclick="CopyToClipboard('tag22067');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20151" onclick="CopyToClipboard('tag20151');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f33c3628f5e4e1ad4e758817da81623ad0f3e753" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427139028" target="_blank">2026-09-10 01:51:33</a></td></tr>
<tr><td><div id="tag4626" onclick="CopyToClipboard('tag4626');return false;" class="tag-decoration">v2-develop</div><div id="tag16614" onclick="CopyToClipboard('tag16614');return false;" class="tag-decoration">v2-develop-604b7ba</div><div id="tag24015" onclick="CopyToClipboard('tag24015');return false;" class="tag-decoration">v2-develop-2.2.0-develop.336</div><div id="tag26928" onclick="CopyToClipboard('tag26928');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag139" onclick="CopyToClipboard('tag139');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25968" onclick="CopyToClipboard('tag25968');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/604b7ba5bba395a839639419f849187037ebb68a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427135068" target="_blank">2026-09-10 01:51:29</a></td></tr>
<tr><td><div id="tag2649" onclick="CopyToClipboard('tag2649');return false;" class="tag-decoration">v3</div><div id="tag7068" onclick="CopyToClipboard('tag7068');return false;" class="tag-decoration">v3-4bf04f1</div><div id="tag18940" onclick="CopyToClipboard('tag18940');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag9653" onclick="CopyToClipboard('tag9653');return false;" class="tag-decoration">v3-v3</div><div id="tag7986" onclick="CopyToClipboard('tag7986');return false;" class="tag-decoration">v3-v3.5</div><div id="tag11078" onclick="CopyToClipboard('tag11078');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4bf04f1f181590037ab33fdd673aceb7f08cdce2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34386995924" target="_blank">2026-09-09 18:06:27</a></td></tr>
<tr><td><div id="tag2233" onclick="CopyToClipboard('tag2233');return false;" class="tag-decoration">v3-develop</div><div id="tag15771" onclick="CopyToClipboard('tag15771');return false;" class="tag-decoration">v3-develop-1199b2a</div><div id="tag12040" onclick="CopyToClipboard('tag12040');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1591</div><div id="tag9858" onclick="CopyToClipboard('tag9858');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14845" onclick="CopyToClipboard('tag14845');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag10530" onclick="CopyToClipboard('tag10530');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1199b2abe88f4d7c9ed256435e186b431a67be4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427144393" target="_blank">2026-09-10 01:51:37</a></td></tr>
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
