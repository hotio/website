---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31372" onclick="CopyToClipboard('tag31372');return false;" class="tag-decoration">release</div><div id="tag7187" onclick="CopyToClipboard('tag7187');return false;" class="tag-decoration">release-f4f7dd0</div><div id="tag23346" onclick="CopyToClipboard('tag23346');return false;" class="tag-decoration">release-0.24.900</div><div id="tag4250" onclick="CopyToClipboard('tag4250');return false;" class="tag-decoration">release-v0</div><div id="tag28142" onclick="CopyToClipboard('tag28142');return false;" class="tag-decoration">release-v0.24</div><div id="tag18970" onclick="CopyToClipboard('tag18970');return false;" class="tag-decoration">release-v0.24.900</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f4f7dd01098cb22d1980a932d17ce9ea3b79e5f2" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21243345508" target="_blank">2026-01-22 09:34:52</a></td></tr>
<tr><td><div id="tag6908" onclick="CopyToClipboard('tag6908');return false;" class="tag-decoration">testing</div><div id="tag1017" onclick="CopyToClipboard('tag1017');return false;" class="tag-decoration">testing-0f4ed34</div><div id="tag21284" onclick="CopyToClipboard('tag21284');return false;" class="tag-decoration">testing-0.24.900</div><div id="tag12511" onclick="CopyToClipboard('tag12511');return false;" class="tag-decoration">testing-v0</div><div id="tag3367" onclick="CopyToClipboard('tag3367');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9175" onclick="CopyToClipboard('tag9175');return false;" class="tag-decoration">testing-v0.24.900</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0f4ed34b53f98a3e20547eb8224ddffe243df631" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21243346383" target="_blank">2026-01-22 09:34:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
