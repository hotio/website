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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22490" onclick="CopyToClipboard('tag22490');return false;" class="tag-decoration">v2</div><div id="tag25340" onclick="CopyToClipboard('tag25340');return false;" class="tag-decoration">v2-f33c362</div><div id="tag15637" onclick="CopyToClipboard('tag15637');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag28826" onclick="CopyToClipboard('tag28826');return false;" class="tag-decoration">v2-v2</div><div id="tag20229" onclick="CopyToClipboard('tag20229');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20203" onclick="CopyToClipboard('tag20203');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f33c3628f5e4e1ad4e758817da81623ad0f3e753" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427139028" target="_blank">2026-09-10 01:51:33</a></td></tr>
<tr><td><div id="tag14949" onclick="CopyToClipboard('tag14949');return false;" class="tag-decoration">v2-develop</div><div id="tag23294" onclick="CopyToClipboard('tag23294');return false;" class="tag-decoration">v2-develop-9911f45</div><div id="tag24439" onclick="CopyToClipboard('tag24439');return false;" class="tag-decoration">v2-develop-2.2.0-develop.336</div><div id="tag2857" onclick="CopyToClipboard('tag2857');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag15150" onclick="CopyToClipboard('tag15150');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15268" onclick="CopyToClipboard('tag15268');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9911f45552326dbe4584c050ce1fca8c64d421fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34245465231" target="_blank">2026-09-08 15:32:57</a></td></tr>
<tr><td><div id="tag14102" onclick="CopyToClipboard('tag14102');return false;" class="tag-decoration">v3</div><div id="tag15476" onclick="CopyToClipboard('tag15476');return false;" class="tag-decoration">v3-4bf04f1</div><div id="tag32715" onclick="CopyToClipboard('tag32715');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag7074" onclick="CopyToClipboard('tag7074');return false;" class="tag-decoration">v3-v3</div><div id="tag16558" onclick="CopyToClipboard('tag16558');return false;" class="tag-decoration">v3-v3.5</div><div id="tag2146" onclick="CopyToClipboard('tag2146');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4bf04f1f181590037ab33fdd673aceb7f08cdce2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34386995924" target="_blank">2026-09-09 18:06:27</a></td></tr>
<tr><td><div id="tag2663" onclick="CopyToClipboard('tag2663');return false;" class="tag-decoration">v3-develop</div><div id="tag7340" onclick="CopyToClipboard('tag7340');return false;" class="tag-decoration">v3-develop-50de43b</div><div id="tag15924" onclick="CopyToClipboard('tag15924');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1591</div><div id="tag15317" onclick="CopyToClipboard('tag15317');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20022" onclick="CopyToClipboard('tag20022');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag14808" onclick="CopyToClipboard('tag14808');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/50de43b390c17516b7ffe9a4fdf421b675234173" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34417745787" target="_blank">2026-09-09 23:37:23</a></td></tr>
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
