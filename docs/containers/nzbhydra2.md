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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27484" onclick="CopyToClipboard('tag27484');return false;" class="tag-decoration">release</div><div id="tag16214" onclick="CopyToClipboard('tag16214');return false;" class="tag-decoration">release-2b337a3</div><div id="tag1535" onclick="CopyToClipboard('tag1535');return false;" class="tag-decoration">release-8.2.3</div><div id="tag12436" onclick="CopyToClipboard('tag12436');return false;" class="tag-decoration">release-v8</div><div id="tag21313" onclick="CopyToClipboard('tag21313');return false;" class="tag-decoration">release-v8.2</div><div id="tag21383" onclick="CopyToClipboard('tag21383');return false;" class="tag-decoration">release-v8.2.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2b337a35d3f4dfac66c81b38d2d037b0483bb041" target="_blank">Upstream update: noblevpn-b3fe625 => noblevpn-7d9e72c</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21065731398" target="_blank">2026-01-16 11:52:31</a></td></tr>
<tr><td><div id="tag15750" onclick="CopyToClipboard('tag15750');return false;" class="tag-decoration">testing</div><div id="tag26502" onclick="CopyToClipboard('tag26502');return false;" class="tag-decoration">testing-7191daa</div><div id="tag3388" onclick="CopyToClipboard('tag3388');return false;" class="tag-decoration">testing-8.2.3</div><div id="tag13660" onclick="CopyToClipboard('tag13660');return false;" class="tag-decoration">testing-v8</div><div id="tag31447" onclick="CopyToClipboard('tag31447');return false;" class="tag-decoration">testing-v8.2</div><div id="tag9855" onclick="CopyToClipboard('tag9855');return false;" class="tag-decoration">testing-v8.2.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7191daa3611b7aeeb0aa6ad3df66c833c20a56ee" target="_blank">Upstream update: noblevpn-b3fe625 => noblevpn-7d9e72c</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21065732025" target="_blank">2026-01-16 11:52:32</a></td></tr>
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
