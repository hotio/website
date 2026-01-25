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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26108" onclick="CopyToClipboard('tag26108');return false;" class="tag-decoration">release</div><div id="tag20758" onclick="CopyToClipboard('tag20758');return false;" class="tag-decoration">release-0713c65</div><div id="tag20220" onclick="CopyToClipboard('tag20220');return false;" class="tag-decoration">release-8.3.0</div><div id="tag19595" onclick="CopyToClipboard('tag19595');return false;" class="tag-decoration">release-v8</div><div id="tag66" onclick="CopyToClipboard('tag66');return false;" class="tag-decoration">release-v8.3</div><div id="tag28287" onclick="CopyToClipboard('tag28287');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0713c6503ec34c638c48862766cfb497ff60c45b" target="_blank">Upstream update: noblevpn-83546e7 => noblevpn-aac85c0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21324840159" target="_blank">2026-01-25 01:32:50</a></td></tr>
<tr><td><div id="tag32063" onclick="CopyToClipboard('tag32063');return false;" class="tag-decoration">testing</div><div id="tag6660" onclick="CopyToClipboard('tag6660');return false;" class="tag-decoration">testing-4886b6e</div><div id="tag7784" onclick="CopyToClipboard('tag7784');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag1820" onclick="CopyToClipboard('tag1820');return false;" class="tag-decoration">testing-v8</div><div id="tag31324" onclick="CopyToClipboard('tag31324');return false;" class="tag-decoration">testing-v8.3</div><div id="tag27677" onclick="CopyToClipboard('tag27677');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4886b6ec3e0256cdb43fac4cb40f4c95b1de8039" target="_blank">Upstream update: noblevpn-83546e7 => noblevpn-aac85c0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21324840266" target="_blank">2026-01-25 01:32:52</a></td></tr>
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
