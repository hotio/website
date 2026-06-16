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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16325" onclick="CopyToClipboard('tag16325');return false;" class="tag-decoration">release</div><div id="tag20438" onclick="CopyToClipboard('tag20438');return false;" class="tag-decoration">release-0c9e0d9</div><div id="tag20987" onclick="CopyToClipboard('tag20987');return false;" class="tag-decoration">release-8.8.3</div><div id="tag30918" onclick="CopyToClipboard('tag30918');return false;" class="tag-decoration">release-v8</div><div id="tag3162" onclick="CopyToClipboard('tag3162');return false;" class="tag-decoration">release-v8.8</div><div id="tag8560" onclick="CopyToClipboard('tag8560');return false;" class="tag-decoration">release-v8.8.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0c9e0d9eb283bf5961d9e45c1579392b80dc2eb4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27642921079" target="_blank">2026-06-16 19:33:34</a></td></tr>
<tr><td><div id="tag28433" onclick="CopyToClipboard('tag28433');return false;" class="tag-decoration">testing</div><div id="tag12182" onclick="CopyToClipboard('tag12182');return false;" class="tag-decoration">testing-76dc006</div><div id="tag25566" onclick="CopyToClipboard('tag25566');return false;" class="tag-decoration">testing-8.8.3</div><div id="tag32101" onclick="CopyToClipboard('tag32101');return false;" class="tag-decoration">testing-v8</div><div id="tag27650" onclick="CopyToClipboard('tag27650');return false;" class="tag-decoration">testing-v8.8</div><div id="tag25563" onclick="CopyToClipboard('tag25563');return false;" class="tag-decoration">testing-v8.8.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/76dc0064edf89763613b8d8060638542420dcd05" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27642922924" target="_blank">2026-06-16 19:33:33</a></td></tr>
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
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
