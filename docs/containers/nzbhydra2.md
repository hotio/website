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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1649" onclick="CopyToClipboard('tag1649');return false;" class="tag-decoration">release</div><div id="tag9861" onclick="CopyToClipboard('tag9861');return false;" class="tag-decoration">release-8.2.1</div><div id="tag21817" onclick="CopyToClipboard('tag21817');return false;" class="tag-decoration">release-53ff11c</div><div id="tag12251" onclick="CopyToClipboard('tag12251');return false;" class="tag-decoration">release-v8</div><div id="tag20724" onclick="CopyToClipboard('tag20724');return false;" class="tag-decoration">release-v8.2</div><div id="tag3968" onclick="CopyToClipboard('tag3968');return false;" class="tag-decoration">release-v8.2.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/53ff11c3e4f575e9f92e309d39c6f1007473141d" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20770101112" target="_blank">2026-01-07 03:57:29</a></td></tr>
<tr><td><div id="tag11012" onclick="CopyToClipboard('tag11012');return false;" class="tag-decoration">testing</div><div id="tag20742" onclick="CopyToClipboard('tag20742');return false;" class="tag-decoration">testing-8.2.1</div><div id="tag3228" onclick="CopyToClipboard('tag3228');return false;" class="tag-decoration">testing-fd81e39</div><div id="tag24181" onclick="CopyToClipboard('tag24181');return false;" class="tag-decoration">testing-v8</div><div id="tag7852" onclick="CopyToClipboard('tag7852');return false;" class="tag-decoration">testing-v8.2</div><div id="tag13814" onclick="CopyToClipboard('tag13814');return false;" class="tag-decoration">testing-v8.2.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/fd81e399bb733f4ec6e0da4835b70912463dcc7d" target="_blank">Version update: 8.2.0 => 8.2.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20760779282" target="_blank">2026-01-06 20:14:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name nzbhydra2 \
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
