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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22177" onclick="CopyToClipboard('tag22177');return false;" class="tag-decoration">v2</div><div id="tag8241" onclick="CopyToClipboard('tag8241');return false;" class="tag-decoration">v2-308a1a2</div><div id="tag13353" onclick="CopyToClipboard('tag13353');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag26830" onclick="CopyToClipboard('tag26830');return false;" class="tag-decoration">v2-v2</div><div id="tag22702" onclick="CopyToClipboard('tag22702');return false;" class="tag-decoration">v2-v2.2</div><div id="tag16147" onclick="CopyToClipboard('tag16147');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/308a1a299f263caed54f488b96ec5abfc1a1f2d1" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707057763" target="_blank">2026-05-12 01:11:46</a></td></tr>
<tr><td><div id="tag17951" onclick="CopyToClipboard('tag17951');return false;" class="tag-decoration">v2-develop</div><div id="tag8064" onclick="CopyToClipboard('tag8064');return false;" class="tag-decoration">v2-develop-c5ee712</div><div id="tag14741" onclick="CopyToClipboard('tag14741');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag19224" onclick="CopyToClipboard('tag19224');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31732" onclick="CopyToClipboard('tag31732');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag7422" onclick="CopyToClipboard('tag7422');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c5ee7121db61e1365ae10ee0e9bc2f0de223731f" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707053506" target="_blank">2026-05-12 01:11:37</a></td></tr>
<tr><td><div id="tag525" onclick="CopyToClipboard('tag525');return false;" class="tag-decoration">v3</div><div id="tag25643" onclick="CopyToClipboard('tag25643');return false;" class="tag-decoration">v3-384cd1c</div><div id="tag13160" onclick="CopyToClipboard('tag13160');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag27225" onclick="CopyToClipboard('tag27225');return false;" class="tag-decoration">v3-v3</div><div id="tag3098" onclick="CopyToClipboard('tag3098');return false;" class="tag-decoration">v3-v3.3</div><div id="tag2309" onclick="CopyToClipboard('tag2309');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/384cd1c64fbda95bbca9fc8e79d9c5b8c2f26319" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707067486" target="_blank">2026-05-12 01:12:05</a></td></tr>
<tr><td><div id="tag14404" onclick="CopyToClipboard('tag14404');return false;" class="tag-decoration">v3-develop</div><div id="tag30151" onclick="CopyToClipboard('tag30151');return false;" class="tag-decoration">v3-develop-45a1850</div><div id="tag11164" onclick="CopyToClipboard('tag11164');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag27320" onclick="CopyToClipboard('tag27320');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26606" onclick="CopyToClipboard('tag26606');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag3763" onclick="CopyToClipboard('tag3763');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/45a185010875b8e0275edd60146b3e244c583604" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707061971" target="_blank">2026-05-12 01:11:54</a></td></tr>
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
