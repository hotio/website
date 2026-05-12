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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6031" onclick="CopyToClipboard('tag6031');return false;" class="tag-decoration">v2</div><div id="tag29504" onclick="CopyToClipboard('tag29504');return false;" class="tag-decoration">v2-ba95051</div><div id="tag32265" onclick="CopyToClipboard('tag32265');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag25842" onclick="CopyToClipboard('tag25842');return false;" class="tag-decoration">v2-v2</div><div id="tag2339" onclick="CopyToClipboard('tag2339');return false;" class="tag-decoration">v2-v2.2</div><div id="tag2978" onclick="CopyToClipboard('tag2978');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ba950514f371adcc2aa8b4d33e9170a69324fa39" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707343188" target="_blank">2026-05-12 01:20:29</a></td></tr>
<tr><td><div id="tag30126" onclick="CopyToClipboard('tag30126');return false;" class="tag-decoration">v2-develop</div><div id="tag14882" onclick="CopyToClipboard('tag14882');return false;" class="tag-decoration">v2-develop-c5ee712</div><div id="tag9843" onclick="CopyToClipboard('tag9843');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag22248" onclick="CopyToClipboard('tag22248');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12933" onclick="CopyToClipboard('tag12933');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag5215" onclick="CopyToClipboard('tag5215');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c5ee7121db61e1365ae10ee0e9bc2f0de223731f" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707053506" target="_blank">2026-05-12 01:11:37</a></td></tr>
<tr><td><div id="tag28639" onclick="CopyToClipboard('tag28639');return false;" class="tag-decoration">v3</div><div id="tag4560" onclick="CopyToClipboard('tag4560');return false;" class="tag-decoration">v3-384cd1c</div><div id="tag12175" onclick="CopyToClipboard('tag12175');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag16554" onclick="CopyToClipboard('tag16554');return false;" class="tag-decoration">v3-v3</div><div id="tag15331" onclick="CopyToClipboard('tag15331');return false;" class="tag-decoration">v3-v3.3</div><div id="tag3394" onclick="CopyToClipboard('tag3394');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/384cd1c64fbda95bbca9fc8e79d9c5b8c2f26319" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707067486" target="_blank">2026-05-12 01:12:05</a></td></tr>
<tr><td><div id="tag20412" onclick="CopyToClipboard('tag20412');return false;" class="tag-decoration">v3-develop</div><div id="tag14723" onclick="CopyToClipboard('tag14723');return false;" class="tag-decoration">v3-develop-45a1850</div><div id="tag9066" onclick="CopyToClipboard('tag9066');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag6928" onclick="CopyToClipboard('tag6928');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32249" onclick="CopyToClipboard('tag32249');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag28237" onclick="CopyToClipboard('tag28237');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/45a185010875b8e0275edd60146b3e244c583604" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707061971" target="_blank">2026-05-12 01:11:54</a></td></tr>
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
