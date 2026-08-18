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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7762" onclick="CopyToClipboard('tag7762');return false;" class="tag-decoration">release</div><div id="tag8746" onclick="CopyToClipboard('tag8746');return false;" class="tag-decoration">release-4476fd1</div><div id="tag14114" onclick="CopyToClipboard('tag14114');return false;" class="tag-decoration">release-8.9.0</div><div id="tag6193" onclick="CopyToClipboard('tag6193');return false;" class="tag-decoration">release-v8</div><div id="tag778" onclick="CopyToClipboard('tag778');return false;" class="tag-decoration">release-v8.9</div><div id="tag20780" onclick="CopyToClipboard('tag20780');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4476fd1584ea52ec118ed98c31254a4de1c046da" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/31768802551" target="_blank">2026-08-14 04:05:51</a></td></tr>
<tr><td><div id="tag8365" onclick="CopyToClipboard('tag8365');return false;" class="tag-decoration">testing</div><div id="tag22950" onclick="CopyToClipboard('tag22950');return false;" class="tag-decoration">testing-5c586da</div><div id="tag28207" onclick="CopyToClipboard('tag28207');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag3948" onclick="CopyToClipboard('tag3948');return false;" class="tag-decoration">testing-v8</div><div id="tag9540" onclick="CopyToClipboard('tag9540');return false;" class="tag-decoration">testing-v8.9</div><div id="tag21885" onclick="CopyToClipboard('tag21885');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5c586dac7cd91027149c977937477b7110e3254a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32192255357" target="_blank">2026-08-18 22:20:33</a></td></tr>
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
