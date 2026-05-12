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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24787" onclick="CopyToClipboard('tag24787');return false;" class="tag-decoration">v2</div><div id="tag21515" onclick="CopyToClipboard('tag21515');return false;" class="tag-decoration">v2-95c70a8</div><div id="tag9409" onclick="CopyToClipboard('tag9409');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag5845" onclick="CopyToClipboard('tag5845');return false;" class="tag-decoration">v2-v2</div><div id="tag27355" onclick="CopyToClipboard('tag27355');return false;" class="tag-decoration">v2-v2.2</div><div id="tag16733" onclick="CopyToClipboard('tag16733');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/95c70a8f090f362c2ba8bab2c178ee13a7374d1d" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700684229" target="_blank">2026-05-11 22:19:51</a></td></tr>
<tr><td><div id="tag9066" onclick="CopyToClipboard('tag9066');return false;" class="tag-decoration">v2-develop</div><div id="tag32316" onclick="CopyToClipboard('tag32316');return false;" class="tag-decoration">v2-develop-c5ee712</div><div id="tag29723" onclick="CopyToClipboard('tag29723');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag11681" onclick="CopyToClipboard('tag11681');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4794" onclick="CopyToClipboard('tag4794');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag6715" onclick="CopyToClipboard('tag6715');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c5ee7121db61e1365ae10ee0e9bc2f0de223731f" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707053506" target="_blank">2026-05-12 01:11:37</a></td></tr>
<tr><td><div id="tag2516" onclick="CopyToClipboard('tag2516');return false;" class="tag-decoration">v3</div><div id="tag12380" onclick="CopyToClipboard('tag12380');return false;" class="tag-decoration">v3-0dc9472</div><div id="tag24975" onclick="CopyToClipboard('tag24975');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag9440" onclick="CopyToClipboard('tag9440');return false;" class="tag-decoration">v3-v3</div><div id="tag8334" onclick="CopyToClipboard('tag8334');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20439" onclick="CopyToClipboard('tag20439');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0dc9472864bc6cbea75e5dfe6b72b41f0a488522" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700691509" target="_blank">2026-05-11 22:20:01</a></td></tr>
<tr><td><div id="tag21369" onclick="CopyToClipboard('tag21369');return false;" class="tag-decoration">v3-develop</div><div id="tag29366" onclick="CopyToClipboard('tag29366');return false;" class="tag-decoration">v3-develop-45a1850</div><div id="tag24977" onclick="CopyToClipboard('tag24977');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag10993" onclick="CopyToClipboard('tag10993');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11081" onclick="CopyToClipboard('tag11081');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag27603" onclick="CopyToClipboard('tag27603');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/45a185010875b8e0275edd60146b3e244c583604" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707061971" target="_blank">2026-05-12 01:11:54</a></td></tr>
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
