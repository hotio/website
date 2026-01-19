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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9539" onclick="CopyToClipboard('tag9539');return false;" class="tag-decoration">release</div><div id="tag28754" onclick="CopyToClipboard('tag28754');return false;" class="tag-decoration">release-8ded325</div><div id="tag32175" onclick="CopyToClipboard('tag32175');return false;" class="tag-decoration">release-8.3.0</div><div id="tag19484" onclick="CopyToClipboard('tag19484');return false;" class="tag-decoration">release-v8</div><div id="tag7679" onclick="CopyToClipboard('tag7679');return false;" class="tag-decoration">release-v8.3</div><div id="tag492" onclick="CopyToClipboard('tag492');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8ded325650cce85e5e54a50a893cb81e000dae1c" target="_blank">Upstream update: noblevpn-db01928 => noblevpn-a3516fa</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21124041923" target="_blank">2026-01-19 03:13:28</a></td></tr>
<tr><td><div id="tag28294" onclick="CopyToClipboard('tag28294');return false;" class="tag-decoration">testing</div><div id="tag20597" onclick="CopyToClipboard('tag20597');return false;" class="tag-decoration">testing-06ceeb1</div><div id="tag19060" onclick="CopyToClipboard('tag19060');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag24683" onclick="CopyToClipboard('tag24683');return false;" class="tag-decoration">testing-v8</div><div id="tag8861" onclick="CopyToClipboard('tag8861');return false;" class="tag-decoration">testing-v8.3</div><div id="tag19331" onclick="CopyToClipboard('tag19331');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/06ceeb1cd4771765d42bf99ed63c0cb79adefb43" target="_blank">Upstream update: noblevpn-a3516fa => noblevpn-130f95b</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21132223746" target="_blank">2026-01-19 09:30:43</a></td></tr>
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
