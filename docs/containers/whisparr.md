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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19213" onclick="CopyToClipboard('tag19213');return false;" class="tag-decoration">v2</div><div id="tag9369" onclick="CopyToClipboard('tag9369');return false;" class="tag-decoration">v2-f33c362</div><div id="tag2687" onclick="CopyToClipboard('tag2687');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag29091" onclick="CopyToClipboard('tag29091');return false;" class="tag-decoration">v2-v2</div><div id="tag5200" onclick="CopyToClipboard('tag5200');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30154" onclick="CopyToClipboard('tag30154');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f33c3628f5e4e1ad4e758817da81623ad0f3e753" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427139028" target="_blank">2026-09-10 01:51:33</a></td></tr>
<tr><td><div id="tag28023" onclick="CopyToClipboard('tag28023');return false;" class="tag-decoration">v2-develop</div><div id="tag17892" onclick="CopyToClipboard('tag17892');return false;" class="tag-decoration">v2-develop-604b7ba</div><div id="tag16505" onclick="CopyToClipboard('tag16505');return false;" class="tag-decoration">v2-develop-2.2.0-develop.336</div><div id="tag9771" onclick="CopyToClipboard('tag9771');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5324" onclick="CopyToClipboard('tag5324');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3550" onclick="CopyToClipboard('tag3550');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/604b7ba5bba395a839639419f849187037ebb68a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427135068" target="_blank">2026-09-10 01:51:29</a></td></tr>
<tr><td><div id="tag23988" onclick="CopyToClipboard('tag23988');return false;" class="tag-decoration">v3</div><div id="tag11668" onclick="CopyToClipboard('tag11668');return false;" class="tag-decoration">v3-4bf04f1</div><div id="tag1501" onclick="CopyToClipboard('tag1501');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag24856" onclick="CopyToClipboard('tag24856');return false;" class="tag-decoration">v3-v3</div><div id="tag6240" onclick="CopyToClipboard('tag6240');return false;" class="tag-decoration">v3-v3.5</div><div id="tag24168" onclick="CopyToClipboard('tag24168');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4bf04f1f181590037ab33fdd673aceb7f08cdce2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34386995924" target="_blank">2026-09-09 18:06:27</a></td></tr>
<tr><td><div id="tag28372" onclick="CopyToClipboard('tag28372');return false;" class="tag-decoration">v3-develop</div><div id="tag14691" onclick="CopyToClipboard('tag14691');return false;" class="tag-decoration">v3-develop-50de43b</div><div id="tag31531" onclick="CopyToClipboard('tag31531');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1591</div><div id="tag15358" onclick="CopyToClipboard('tag15358');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag22989" onclick="CopyToClipboard('tag22989');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag9860" onclick="CopyToClipboard('tag9860');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/50de43b390c17516b7ffe9a4fdf421b675234173" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34417745787" target="_blank">2026-09-09 23:37:23</a></td></tr>
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
