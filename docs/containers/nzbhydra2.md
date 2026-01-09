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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25516" onclick="CopyToClipboard('tag25516');return false;" class="tag-decoration">release</div><div id="tag25306" onclick="CopyToClipboard('tag25306');return false;" class="tag-decoration">release-8.2.1</div><div id="tag2509" onclick="CopyToClipboard('tag2509');return false;" class="tag-decoration">release-c148838</div><div id="tag4788" onclick="CopyToClipboard('tag4788');return false;" class="tag-decoration">release-v8</div><div id="tag23255" onclick="CopyToClipboard('tag23255');return false;" class="tag-decoration">release-v8.2</div><div id="tag7125" onclick="CopyToClipboard('tag7125');return false;" class="tag-decoration">release-v8.2.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c1488389f803aedd16271c432a847b1360d097ae" target="_blank">Upstream update: noblevpn-d461e72 => noblevpn-5c07a3a</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20845760052" target="_blank">2026-01-09 08:22:15</a></td></tr>
<tr><td><div id="tag18529" onclick="CopyToClipboard('tag18529');return false;" class="tag-decoration">testing</div><div id="tag6125" onclick="CopyToClipboard('tag6125');return false;" class="tag-decoration">testing-8.2.1</div><div id="tag31415" onclick="CopyToClipboard('tag31415');return false;" class="tag-decoration">testing-253bb03</div><div id="tag10916" onclick="CopyToClipboard('tag10916');return false;" class="tag-decoration">testing-v8</div><div id="tag6655" onclick="CopyToClipboard('tag6655');return false;" class="tag-decoration">testing-v8.2</div><div id="tag8785" onclick="CopyToClipboard('tag8785');return false;" class="tag-decoration">testing-v8.2.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/253bb03e91af68205a6cf04ec8097fb5f41050da" target="_blank">Upstream update: noblevpn-d461e72 => noblevpn-5c07a3a</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20845760286" target="_blank">2026-01-09 08:22:16</a></td></tr>
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
