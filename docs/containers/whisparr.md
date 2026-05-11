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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24627" onclick="CopyToClipboard('tag24627');return false;" class="tag-decoration">v2</div><div id="tag4725" onclick="CopyToClipboard('tag4725');return false;" class="tag-decoration">v2-95c70a8</div><div id="tag14343" onclick="CopyToClipboard('tag14343');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag7062" onclick="CopyToClipboard('tag7062');return false;" class="tag-decoration">v2-v2</div><div id="tag5380" onclick="CopyToClipboard('tag5380');return false;" class="tag-decoration">v2-v2.2</div><div id="tag16500" onclick="CopyToClipboard('tag16500');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/95c70a8f090f362c2ba8bab2c178ee13a7374d1d" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700684229" target="_blank">2026-05-11 22:19:51</a></td></tr>
<tr><td><div id="tag22724" onclick="CopyToClipboard('tag22724');return false;" class="tag-decoration">v2-develop</div><div id="tag3143" onclick="CopyToClipboard('tag3143');return false;" class="tag-decoration">v2-develop-a628891</div><div id="tag29232" onclick="CopyToClipboard('tag29232');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag5813" onclick="CopyToClipboard('tag5813');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9059" onclick="CopyToClipboard('tag9059');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18075" onclick="CopyToClipboard('tag18075');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a6288917ef0995e0dedc3bf1207162c59d9a60bb" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700680195" target="_blank">2026-05-11 22:19:45</a></td></tr>
<tr><td><div id="tag2059" onclick="CopyToClipboard('tag2059');return false;" class="tag-decoration">v3</div><div id="tag13546" onclick="CopyToClipboard('tag13546');return false;" class="tag-decoration">v3-0dc9472</div><div id="tag31505" onclick="CopyToClipboard('tag31505');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag28252" onclick="CopyToClipboard('tag28252');return false;" class="tag-decoration">v3-v3</div><div id="tag22075" onclick="CopyToClipboard('tag22075');return false;" class="tag-decoration">v3-v3.3</div><div id="tag11392" onclick="CopyToClipboard('tag11392');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0dc9472864bc6cbea75e5dfe6b72b41f0a488522" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700691509" target="_blank">2026-05-11 22:20:01</a></td></tr>
<tr><td><div id="tag26519" onclick="CopyToClipboard('tag26519');return false;" class="tag-decoration">v3-develop</div><div id="tag26679" onclick="CopyToClipboard('tag26679');return false;" class="tag-decoration">v3-develop-205e1d6</div><div id="tag31623" onclick="CopyToClipboard('tag31623');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag6438" onclick="CopyToClipboard('tag6438');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31174" onclick="CopyToClipboard('tag31174');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag24783" onclick="CopyToClipboard('tag24783');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/205e1d66565fa45708538bdeac1d269712f6c565" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700687074" target="_blank">2026-05-11 22:19:56</a></td></tr>
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
