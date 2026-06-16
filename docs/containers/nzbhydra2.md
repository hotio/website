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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3658" onclick="CopyToClipboard('tag3658');return false;" class="tag-decoration">release</div><div id="tag8576" onclick="CopyToClipboard('tag8576');return false;" class="tag-decoration">release-76de336</div><div id="tag9791" onclick="CopyToClipboard('tag9791');return false;" class="tag-decoration">release-8.8.3</div><div id="tag27983" onclick="CopyToClipboard('tag27983');return false;" class="tag-decoration">release-v8</div><div id="tag29236" onclick="CopyToClipboard('tag29236');return false;" class="tag-decoration">release-v8.8</div><div id="tag3514" onclick="CopyToClipboard('tag3514');return false;" class="tag-decoration">release-v8.8.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/76de336cc1489fea482d25670ada1189eae05fd0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27239757855" target="_blank">2026-06-09 22:23:39</a></td></tr>
<tr><td><div id="tag12628" onclick="CopyToClipboard('tag12628');return false;" class="tag-decoration">testing</div><div id="tag21222" onclick="CopyToClipboard('tag21222');return false;" class="tag-decoration">testing-76dc006</div><div id="tag7105" onclick="CopyToClipboard('tag7105');return false;" class="tag-decoration">testing-8.8.3</div><div id="tag29071" onclick="CopyToClipboard('tag29071');return false;" class="tag-decoration">testing-v8</div><div id="tag6482" onclick="CopyToClipboard('tag6482');return false;" class="tag-decoration">testing-v8.8</div><div id="tag14169" onclick="CopyToClipboard('tag14169');return false;" class="tag-decoration">testing-v8.8.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/76dc0064edf89763613b8d8060638542420dcd05" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27642922924" target="_blank">2026-06-16 19:33:33</a></td></tr>
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
