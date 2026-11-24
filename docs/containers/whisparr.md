---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15252" onclick="CopyToClipboard('tag15252');return false;" class="tag-decoration">v2</div><div id="tag30623" onclick="CopyToClipboard('tag30623');return false;" class="tag-decoration">v2-465f095</div><div id="tag22412" onclick="CopyToClipboard('tag22412');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag25165" onclick="CopyToClipboard('tag25165');return false;" class="tag-decoration">v2-v2</div><div id="tag27732" onclick="CopyToClipboard('tag27732');return false;" class="tag-decoration">v2-v2.3</div><div id="tag16602" onclick="CopyToClipboard('tag16602');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465f0956b267fabf6006289908305827f559832b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493225430" target="_blank">2026-11-24 21:38:58</a></td></tr>
<tr><td><div id="tag4407" onclick="CopyToClipboard('tag4407');return false;" class="tag-decoration">v2-develop</div><div id="tag26672" onclick="CopyToClipboard('tag26672');return false;" class="tag-decoration">v2-develop-174c47c</div><div id="tag13974" onclick="CopyToClipboard('tag13974');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag20322" onclick="CopyToClipboard('tag20322');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag25633" onclick="CopyToClipboard('tag25633');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag9401" onclick="CopyToClipboard('tag9401');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/174c47ca2300594f263955e22c187e40977fbb21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386947754" target="_blank">2026-11-24 11:44:29</a></td></tr>
<tr><td><div id="tag9070" onclick="CopyToClipboard('tag9070');return false;" class="tag-decoration">v3</div><div id="tag24387" onclick="CopyToClipboard('tag24387');return false;" class="tag-decoration">v3-4eb09fa</div><div id="tag17870" onclick="CopyToClipboard('tag17870');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag164" onclick="CopyToClipboard('tag164');return false;" class="tag-decoration">v3-v3</div><div id="tag360" onclick="CopyToClipboard('tag360');return false;" class="tag-decoration">v3-v3.6</div><div id="tag12058" onclick="CopyToClipboard('tag12058');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4eb09fa76d1d1dde83c9dcaa879cd4087a560b18" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493224431" target="_blank">2026-11-24 21:38:57</a></td></tr>
<tr><td><div id="tag14559" onclick="CopyToClipboard('tag14559');return false;" class="tag-decoration">v3-develop</div><div id="tag12852" onclick="CopyToClipboard('tag12852');return false;" class="tag-decoration">v3-develop-71adccf</div><div id="tag3073" onclick="CopyToClipboard('tag3073');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag9092" onclick="CopyToClipboard('tag9092');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3062" onclick="CopyToClipboard('tag3062');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag32448" onclick="CopyToClipboard('tag32448');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/71adccf0ad4f02baef2151c60c61f587e030a481" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386950302" target="_blank">2026-11-24 11:44:30</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
