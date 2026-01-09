---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15663" onclick="CopyToClipboard('tag15663');return false;" class="tag-decoration">release</div><div id="tag24016" onclick="CopyToClipboard('tag24016');return false;" class="tag-decoration">release-8.2.1</div><div id="tag9045" onclick="CopyToClipboard('tag9045');return false;" class="tag-decoration">release-8249506</div><div id="tag15478" onclick="CopyToClipboard('tag15478');return false;" class="tag-decoration">release-v8</div><div id="tag32598" onclick="CopyToClipboard('tag32598');return false;" class="tag-decoration">release-v8.2</div><div id="tag14711" onclick="CopyToClipboard('tag14711');return false;" class="tag-decoration">release-v8.2.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/824950666900e8fd415f2a661f207424da3debde" target="_blank">Upstream update: null => noblevpn-d461e72</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20842472312" target="_blank">2026-01-09 05:40:46</a></td></tr>
<tr><td><div id="tag26342" onclick="CopyToClipboard('tag26342');return false;" class="tag-decoration">testing</div><div id="tag3794" onclick="CopyToClipboard('tag3794');return false;" class="tag-decoration">testing-8.2.1</div><div id="tag26432" onclick="CopyToClipboard('tag26432');return false;" class="tag-decoration">testing-253bb03</div><div id="tag1403" onclick="CopyToClipboard('tag1403');return false;" class="tag-decoration">testing-v8</div><div id="tag18781" onclick="CopyToClipboard('tag18781');return false;" class="tag-decoration">testing-v8.2</div><div id="tag14503" onclick="CopyToClipboard('tag14503');return false;" class="tag-decoration">testing-v8.2.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/253bb03e91af68205a6cf04ec8097fb5f41050da" target="_blank">Upstream update: noblevpn-d461e72 => noblevpn-5c07a3a</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20845760286" target="_blank">2026-01-09 08:22:16</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
