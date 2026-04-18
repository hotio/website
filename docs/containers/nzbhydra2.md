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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7775" onclick="CopyToClipboard('tag7775');return false;" class="tag-decoration">release</div><div id="tag1165" onclick="CopyToClipboard('tag1165');return false;" class="tag-decoration">release-04c52d8</div><div id="tag3431" onclick="CopyToClipboard('tag3431');return false;" class="tag-decoration">release-8.6.0</div><div id="tag2271" onclick="CopyToClipboard('tag2271');return false;" class="tag-decoration">release-v8</div><div id="tag4867" onclick="CopyToClipboard('tag4867');return false;" class="tag-decoration">release-v8.6</div><div id="tag4307" onclick="CopyToClipboard('tag4307');return false;" class="tag-decoration">release-v8.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/04c52d882a28b10e798ff6bdcb7b9df389409b23" target="_blank">Version update: 8.5.4 => 8.6.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24601391550" target="_blank">2026-04-18 09:05:39</a></td></tr>
<tr><td><div id="tag16819" onclick="CopyToClipboard('tag16819');return false;" class="tag-decoration">testing</div><div id="tag10909" onclick="CopyToClipboard('tag10909');return false;" class="tag-decoration">testing-80a64b2</div><div id="tag20347" onclick="CopyToClipboard('tag20347');return false;" class="tag-decoration">testing-8.6.0</div><div id="tag31519" onclick="CopyToClipboard('tag31519');return false;" class="tag-decoration">testing-v8</div><div id="tag20956" onclick="CopyToClipboard('tag20956');return false;" class="tag-decoration">testing-v8.6</div><div id="tag17895" onclick="CopyToClipboard('tag17895');return false;" class="tag-decoration">testing-v8.6.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/80a64b2b798da9231df9af819530577282702fcc" target="_blank">Version update: 8.5.4 => 8.6.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24601391920" target="_blank">2026-04-18 09:05:41</a></td></tr>
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
