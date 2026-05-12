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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20610" onclick="CopyToClipboard('tag20610');return false;" class="tag-decoration">v2</div><div id="tag24872" onclick="CopyToClipboard('tag24872');return false;" class="tag-decoration">v2-ba95051</div><div id="tag25700" onclick="CopyToClipboard('tag25700');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag10438" onclick="CopyToClipboard('tag10438');return false;" class="tag-decoration">v2-v2</div><div id="tag26233" onclick="CopyToClipboard('tag26233');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3654" onclick="CopyToClipboard('tag3654');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ba950514f371adcc2aa8b4d33e9170a69324fa39" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707343188" target="_blank">2026-05-12 01:20:29</a></td></tr>
<tr><td><div id="tag22398" onclick="CopyToClipboard('tag22398');return false;" class="tag-decoration">v2-develop</div><div id="tag27312" onclick="CopyToClipboard('tag27312');return false;" class="tag-decoration">v2-develop-c5ee712</div><div id="tag6911" onclick="CopyToClipboard('tag6911');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag1124" onclick="CopyToClipboard('tag1124');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag25209" onclick="CopyToClipboard('tag25209');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16957" onclick="CopyToClipboard('tag16957');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c5ee7121db61e1365ae10ee0e9bc2f0de223731f" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707053506" target="_blank">2026-05-12 01:11:37</a></td></tr>
<tr><td><div id="tag13800" onclick="CopyToClipboard('tag13800');return false;" class="tag-decoration">v3</div><div id="tag26570" onclick="CopyToClipboard('tag26570');return false;" class="tag-decoration">v3-4140480</div><div id="tag21473" onclick="CopyToClipboard('tag21473');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag5233" onclick="CopyToClipboard('tag5233');return false;" class="tag-decoration">v3-v3</div><div id="tag24689" onclick="CopyToClipboard('tag24689');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20309" onclick="CopyToClipboard('tag20309');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4140480c2ce34f60534ffc64ab7471f14ad44ac2" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707351361" target="_blank">2026-05-12 01:20:42</a></td></tr>
<tr><td><div id="tag6351" onclick="CopyToClipboard('tag6351');return false;" class="tag-decoration">v3-develop</div><div id="tag25226" onclick="CopyToClipboard('tag25226');return false;" class="tag-decoration">v3-develop-546225f</div><div id="tag4569" onclick="CopyToClipboard('tag4569');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag1078" onclick="CopyToClipboard('tag1078');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10959" onclick="CopyToClipboard('tag10959');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29928" onclick="CopyToClipboard('tag29928');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/546225faf99c707041f6f002bfd99d68cf54af50" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707347052" target="_blank">2026-05-12 01:20:34</a></td></tr>
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
